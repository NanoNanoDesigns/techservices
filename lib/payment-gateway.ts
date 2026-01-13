import { paymentConfig } from "./config"
import { SquarePaymentProcessor } from "./payment-providers/square"

export interface PaymentProcessor {
  processPayment(
    amount: number,
    currency: string,
  ): Promise<{ success: boolean; transactionId?: string; error?: string }>
}

export class MockPaymentProcessor implements PaymentProcessor {
  async processPayment(
    amount: number,
    currency: string,
  ): Promise<{ success: boolean; transactionId?: string; error?: string }> {
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // For demo: 80% success rate
    if (Math.random() < 0.8) {
      return {
        success: true,
        transactionId: `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      }
    } else {
      return {
        success: false,
        error: "Payment declined. Please try another payment method.",
      }
    }
  }
}

/**
 * Get the configured payment processor based on environment variables
 * Supports: mock, square
 * Add more providers by extending this factory
 */
export function getPaymentProcessor(): PaymentProcessor {
  switch (paymentConfig.provider) {
    case "square":
      return new SquarePaymentProcessor()
    case "mock":
    default:
      return new MockPaymentProcessor()
  }
}
