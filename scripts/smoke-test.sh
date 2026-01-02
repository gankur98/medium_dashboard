#!/usr/bin/env bash
set -euo pipefail

HOST=${1:-localhost}
PORT=${2:-3000}
TIMEOUT=${3:-60}

echo "Waiting for http://${HOST}:${PORT} to respond (timeout ${TIMEOUT}s)..."
for i in $(seq 1 ${TIMEOUT}); do
  if curl -sSf "http://${HOST}:${PORT}/" >/dev/null 2>&1; then
    echo "App responded on attempt ${i}"
    break
  fi
  sleep 1
done

if ! curl -sSf "http://${HOST}:${PORT}/" >/dev/null 2>&1; then
  echo "ERROR: App did not start within ${TIMEOUT}s"
  exit 1
fi

# Check API endpoint
echo "Checking /api/metrics"
RESP=$(curl -sS "http://${HOST}:${PORT}/api/metrics")
if echo "$RESP" | jq -e 'type == "array"' >/dev/null 2>&1; then
  echo "OK: /api/metrics returned an array (length: $(echo "$RESP" | jq 'length'))"
else
  echo "ERROR: /api/metrics did not return an array"
  echo "Response was: $RESP"
  exit 1
fi

echo "Smoke test passed ✅"
