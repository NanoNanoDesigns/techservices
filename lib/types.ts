export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  shippingAddress: string
  items: CartItem[]
  total: number
  createdAt: Date
}
