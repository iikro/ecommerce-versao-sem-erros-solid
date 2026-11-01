#!/bin/bash

curl -X POST http://localhost:3000/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer": "cliente@ethereal.email",
    "items": [{ "productId": 1, "quantity": 1 }],
    "paymentMethod": "credit_card",
    "paymentDetails": { "cardNumber": "1234567812345678", "cvv": "123" }
  }'
