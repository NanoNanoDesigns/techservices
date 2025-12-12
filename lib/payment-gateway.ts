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

// In production, swap this with real payment processor
export function getPaymentProcessor(): PaymentProcessor {
  return new MockPaymentProcessor()
}
