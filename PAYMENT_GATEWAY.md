# Payment Gateway Integration

This application now supports multiple payment gateways through a flexible, environment-based configuration system.

## Supported Payment Providers

- **Mock** (default) - Simulated payment processing for development/testing
- **Square** - Full Square Payments API integration

## Configuration

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Choose your payment provider: "mock" or "square"
PAYMENT_PROVIDER=mock

# Square Payment Gateway Configuration
# Only required when PAYMENT_PROVIDER=square
SQUARE_ACCESS_TOKEN=your_access_token_here
SQUARE_ENVIRONMENT=sandbox  # or "production"
SQUARE_LOCATION_ID=your_location_id_here
```

### Getting Square Credentials

1. Sign up for a Square developer account at https://developer.squareup.com/
2. Create an application in the Square Developer Dashboard
3. Get your credentials:
   - **Access Token**: Found in your application's "Credentials" section
   - **Location ID**: Found in your Square Dashboard under "Locations"
   - **Environment**: Use "sandbox" for testing, "production" for live payments

### Using Mock Payment Processor (Development)

The mock processor is perfect for development and testing:

```bash
PAYMENT_PROVIDER=mock
```

Features:
- 2-second simulated processing delay
- 80% success rate (randomized for testing error handling)
- No external API calls required
- Generates mock transaction IDs

### Using Square Payment Processor

Switch to Square for real payment processing:

```bash
PAYMENT_PROVIDER=square
SQUARE_ACCESS_TOKEN=EAAAl...
SQUARE_ENVIRONMENT=sandbox
SQUARE_LOCATION_ID=L123...
```

## Architecture

### Files Structure

```
lib/
├── config.ts                      # Environment configuration loader
├── payment-gateway.ts             # Payment processor interface & factory
└── payment-providers/
    └── square.ts                  # Square payment implementation

app/
└── api/
    └── process-payment/
        └── route.ts               # Server-side payment API endpoint
```

### Payment Flow

1. **Checkout Page** (`app/checkout/page.tsx`) collects customer information
2. **API Route** (`app/api/process-payment/route.ts`) receives payment request
3. **Payment Gateway Factory** (`lib/payment-gateway.ts`) selects configured processor
4. **Payment Processor** processes the payment (Mock or Square)
5. **Response** returns success/failure with transaction ID or error message

### Payment Processor Interface

All payment processors implement this interface:

```typescript
interface PaymentProcessor {
  processPayment(
    amount: number,
    currency: string,
  ): Promise<{
    success: boolean
    transactionId?: string
    error?: string
  }>
}
```

## Adding New Payment Providers

To add support for Stripe, PayPal, or other providers:

1. **Create processor implementation**:
   ```typescript
   // lib/payment-providers/stripe.ts
   import type { PaymentProcessor } from "../payment-gateway"
   
   export class StripePaymentProcessor implements PaymentProcessor {
     async processPayment(amount: number, currency: string) {
       // Implement Stripe integration
     }
   }
   ```

2. **Update config types**:
   ```typescript
   // lib/config.ts
   export type PaymentProvider = "mock" | "square" | "stripe"
   ```

3. **Add to factory**:
   ```typescript
   // lib/payment-gateway.ts
   export function getPaymentProcessor(): PaymentProcessor {
     switch (paymentConfig.provider) {
       case "square":
         return new SquarePaymentProcessor()
       case "stripe":
         return new StripePaymentProcessor()
       case "mock":
       default:
         return new MockPaymentProcessor()
     }
   }
   ```

4. **Add environment variables** to `.env.example` and `lib/config.ts`

## API Endpoint

### POST `/api/process-payment`

Process a payment with the configured payment gateway.

**Request Body:**
```json
{
  "amount": 349.97,
  "currency": "USD",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "shippingAddress": "123 Main St, City, State, ZIP",
  "items": [
    {
      "productId": "1",
      "name": "Product Name",
      "price": 99.99,
      "quantity": 1
    }
  ]
}
```

**Success Response (200):**
```json
{
  "success": true,
  "transactionId": "TXN-1234567890-abc123",
  "orderId": "ORD-1234567890-xyz789"
}
```

**Error Response (402/400/500):**
```json
{
  "success": false,
  "error": "Payment declined. Please try another payment method."
}
```

## Testing

### Test with Mock Processor

1. Set `PAYMENT_PROVIDER=mock` in `.env.local`
2. Navigate to `/checkout` in your browser
3. Fill out the form and submit
4. Observe ~80% success rate for testing error handling

### Test with Square Sandbox

1. Get Square sandbox credentials
2. Set environment variables:
   ```bash
   PAYMENT_PROVIDER=square
   SQUARE_ACCESS_TOKEN=<sandbox_token>
   SQUARE_ENVIRONMENT=sandbox
   SQUARE_LOCATION_ID=<sandbox_location>
   ```
3. Navigate to `/checkout` and test
4. View transactions in Square Dashboard (Sandbox mode)

## Security Notes

- ⚠️ Never commit `.env.local` to version control
- ✅ Use `.env.example` for documenting required variables
- ✅ API keys are only used server-side in API routes
- ✅ Client-side code never sees sensitive credentials
- ⚠️ The current implementation uses `sourceId: "EXTERNAL"` - in production, integrate Square's Web Payments SDK for secure card tokenization

## Next Steps

For production deployment:

1. **Integrate Square Web Payments SDK** on the frontend for secure card collection
2. **Add database** to persist orders and transaction records
3. **Implement email notifications** for order confirmations
4. **Add webhook handlers** for payment status updates
5. **Implement refund functionality** through the payment processors
6. **Add comprehensive error logging** and monitoring
7. **Set up proper cart state management** to pass real cart data to checkout

## Dependencies

- `square` (v43.2.1) - Official Square Node.js SDK

## Support

For issues with:
- Square integration: https://developer.squareup.com/support
- This implementation: Check the code documentation in `lib/payment-gateway.ts`
