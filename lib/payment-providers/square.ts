import { SquareClient, SquareEnvironment, SquareError, Square } from "square"
import type { PaymentProcessor } from "../payment-gateway"
import { paymentConfig } from "../config"

export class SquarePaymentProcessor implements PaymentProcessor {
  private client: SquareClient

  constructor() {
    if (!paymentConfig.square) {
      throw new Error("Square configuration is missing")
    }

    const { accessToken, environment } = paymentConfig.square

    this.client = new SquareClient({
      token: accessToken,
      environment:
        environment === "production" ? SquareEnvironment.Production : SquareEnvironment.Sandbox,
    })
  }

  async processPayment(
    amount: number,
    currency: string,
  ): Promise<{ success: boolean; transactionId?: string; error?: string }> {
    try {
      if (!paymentConfig.square) {
        throw new Error("Square configuration is missing")
      }

      // Convert amount to cents/smallest currency unit
      const amountInCents = Math.round(amount * 100)

      // Create a payment using Square Payments API
      const response = await this.client.payments.create({
        sourceId: "EXTERNAL", // In real implementation, this would come from Square's payment form
        idempotencyKey: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        amountMoney: {
          amount: BigInt(amountInCents),
          currency: currency.toUpperCase() as Square.Currency,
        },
        locationId: paymentConfig.square.locationId,
      })

      if (response.payment?.id) {
        return {
          success: true,
          transactionId: response.payment.id,
        }
      }

      return {
        success: false,
        error: "Payment processing failed - no payment record returned",
      }
    } catch (error) {
      if (error instanceof SquareError) {
        const errorMessages =
          error.errors?.map((e) => e.detail || e.code).join(", ") || "Unknown error"
        return {
          success: false,
          error: `Square API Error: ${errorMessages}`,
        }
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : "Payment processing failed",
      }
    }
  }
}
