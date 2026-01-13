/**
 * Environment configuration for payment gateways and services
 */

export type PaymentProvider = "mock" | "square"

export interface PaymentConfig {
  provider: PaymentProvider
  square?: {
    accessToken: string
    environment: "sandbox" | "production"
    locationId: string
  }
}

function getPaymentConfig(): PaymentConfig {
  const provider = (process.env.PAYMENT_PROVIDER || "mock") as PaymentProvider

  const config: PaymentConfig = {
    provider,
  }

  if (provider === "square") {
    const accessToken = process.env.SQUARE_ACCESS_TOKEN
    const environment = process.env.SQUARE_ENVIRONMENT as "sandbox" | "production" | undefined
    const locationId = process.env.SQUARE_LOCATION_ID

    if (!accessToken) {
      throw new Error("SQUARE_ACCESS_TOKEN is required when PAYMENT_PROVIDER is set to 'square'")
    }

    if (!environment || (environment !== "sandbox" && environment !== "production")) {
      throw new Error("SQUARE_ENVIRONMENT must be either 'sandbox' or 'production'")
    }

    if (!locationId) {
      throw new Error("SQUARE_LOCATION_ID is required when PAYMENT_PROVIDER is set to 'square'")
    }

    config.square = {
      accessToken,
      environment,
      locationId,
    }
  }

  return config
}

// Export the configuration
export const paymentConfig = getPaymentConfig()
