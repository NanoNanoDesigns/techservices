import { NextRequest, NextResponse } from "next/server"
import { getPaymentProcessor } from "@/lib/payment-gateway"

export interface ProcessPaymentRequest {
  amount: number
  currency: string
  customerName: string
  customerEmail: string
  shippingAddress: string
  items: Array<{
    productId: string
    name: string
    price: number
    quantity: number
  }>
}

export interface ProcessPaymentResponse {
  success: boolean
  transactionId?: string
  orderId?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<ProcessPaymentResponse>> {
  try {
    const body: ProcessPaymentRequest = await request.json()

    // Validate request
    if (!body.amount || body.amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid payment amount",
        },
        { status: 400 },
      )
    }

    if (!body.customerEmail || !body.customerName) {
      return NextResponse.json(
        {
          success: false,
          error: "Customer information is required",
        },
        { status: 400 },
      )
    }

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Order must contain at least one item",
        },
        { status: 400 },
      )
    }

    // Get the configured payment processor
    const paymentProcessor = getPaymentProcessor()

    // Process the payment
    const result = await paymentProcessor.processPayment(body.amount, body.currency || "USD")

    if (result.success) {
      // Generate order ID
      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      // In a real application, you would:
      // 1. Save the order to a database
      // 2. Send confirmation email
      // 3. Update inventory
      // 4. Trigger fulfillment process

      console.log("Order created:", {
        orderId,
        transactionId: result.transactionId,
        customer: {
          name: body.customerName,
          email: body.customerEmail,
        },
        amount: body.amount,
        currency: body.currency,
        items: body.items,
      })

      return NextResponse.json({
        success: true,
        transactionId: result.transactionId,
        orderId,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Payment processing failed",
        },
        { status: 402 },
      )
    }
  } catch (error) {
    console.error("Payment processing error:", error)

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    )
  }
}
