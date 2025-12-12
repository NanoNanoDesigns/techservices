"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Monitor, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderStatus, setOrderStatus] = useState<"form" | "processing" | "success" | "error">("form")
  const [errorMessage, setErrorMessage] = useState("")

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    shippingAddress: "",
  })

  // For demo purposes: cart data would normally come from context/params
  const [cartTotal] = useState(349.97) // Sample amount

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.customerName || !formData.customerEmail || !formData.shippingAddress) {
      setErrorMessage("Please fill in all fields")
      return
    }

    setIsProcessing(true)
    setOrderStatus("processing")

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate 80% success rate for demo
      if (Math.random() < 0.8) {
        setOrderStatus("success")
        // In production, you would save the order here
        console.log("Order placed:", { ...formData, total: cartTotal })
      } else {
        setOrderStatus("error")
        setErrorMessage("Payment declined. Please try another payment method.")
      }
    } catch (error) {
      setOrderStatus("error")
      setErrorMessage("An error occurred while processing your order.")
    } finally {
      setIsProcessing(false)
    }
  }

  if (orderStatus === "success") {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container h-16 flex items-center gap-2 font-bold text-lg">
            <Monitor className="h-6 w-6" />
            <span>Tech Services Nano</span>
          </div>
        </header>

        <main className="container py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We'll send a confirmation email to{" "}
              <span className="font-semibold">{formData.customerEmail}</span>
            </p>
            <Card className="mb-6 p-4">
              <p className="text-sm text-muted-foreground mb-2">Order Total</p>
              <p className="text-2xl font-bold">${cartTotal.toFixed(2)}</p>
            </Card>
            <Button asChild className="w-full">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container h-16 flex items-center gap-2 font-bold text-lg">
          <Monitor className="h-6 w-6" />
          <span>Tech Services Nano</span>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/shop" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Checkout</CardTitle>
                <CardDescription>Complete your order information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="customerName"
                      placeholder="John Doe"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="customerEmail"
                      placeholder="john@example.com"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Shipping Address</label>
                    <Textarea
                      name="shippingAddress"
                      placeholder="123 Main St, City, State, ZIP"
                      value={formData.shippingAddress}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                      rows={4}
                    />
                  </div>

                  {/* Error Message */}
                  {orderStatus === "error" && (
                    <div className="flex gap-3 p-3 bg-destructive/10 border border-destructive rounded-lg">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-destructive">{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" disabled={isProcessing} size="lg">
                    {isProcessing ? (
                      <>
                        <span className="opacity-0">Processing Payment</span>
                        <span className="absolute">Processing Payment...</span>
                      </>
                    ) : (
                      "Complete Order"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Sample Items */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Mechanical Keyboard</span>
                    <span>$89.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Wireless Mouse</span>
                    <span>$34.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>USB-C Hub</span>
                    <span>$49.99</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${(cartTotal - 25).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>$25.00</span>
                  </div>
                  <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
