import type { Product } from "./types"

export const PRODUCTS: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Wireless USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0 ports, and SD card reader",
    price: 49.99,
    category: "Electronics",
    image: "/usb-c-hub-adapter.jpg",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with Cherry MX switches",
    price: 89.99,
    category: "Electronics",
    image: "/mechanical-keyboard-rgb.jpg",
  },
  {
    id: "3",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 34.99,
    category: "Electronics",
    image: "/wireless-mouse.png",
  },
  {
    id: "4",
    name: "4K Webcam",
    description: "Ultra HD webcam with auto-focus and noise-canceling mic",
    price: 129.99,
    category: "Electronics",
    image: "/4k-webcam.jpg",
  },
  {
    id: "5",
    name: "Monitor Stand",
    description: "Adjustable dual monitor stand with storage",
    price: 44.99,
    category: "Electronics",
    image: "/monitor-stand.jpg",
  },
  {
    id: "6",
    name: "Laptop Cooling Pad",
    description: "5-fan laptop cooler with silent operation",
    price: 39.99,
    category: "Electronics",
    image: "/laptop-cooling-pad.jpg",
  },

  // Software
  {
    id: "7",
    name: "Windows 11 Professional",
    description: "Professional operating system with advanced security features",
    price: 199.99,
    category: "Software",
    image: "/windows-11-professional.jpg",
  },
  {
    id: "8",
    name: "Microsoft Office 365 (1 Year)",
    description: "Full Office suite with Word, Excel, PowerPoint, and Outlook",
    price: 69.99,
    category: "Software",
    image: "/microsoft-office-suite.png",
  },
  {
    id: "9",
    name: "Norton Antivirus 360",
    description: "Complete cybersecurity protection for your devices",
    price: 59.99,
    category: "Software",
    image: "/antivirus-software.png",
  },
  {
    id: "10",
    name: "Adobe Creative Cloud (1 Month)",
    description: "Access to Photoshop, Illustrator, Premiere Pro, and more",
    price: 54.99,
    category: "Software",
    image: "/adobe-creative-cloud-collage.png",
  },

  // Services / Digital Products
  {
    id: "11",
    name: "Website Design Package",
    description: "Professional 5-page website with SEO optimization",
    price: 299.99,
    category: "Services",
    image: "/website-design-concept.png",
  },
  {
    id: "12",
    name: "Computer Repair Voucher ($150)",
    description: "Service voucher for computer repair and troubleshooting",
    price: 150.0,
    category: "Services",
    image: "/computer-repair-shop.png",
  },
  {
    id: "13",
    name: "Network Setup Consultation",
    description: "Professional consultation for home or office network setup",
    price: 89.99,
    category: "Services",
    image: "/network-setup.png",
  },
  {
    id: "14",
    name: "IT Training Session (2 Hours)",
    description: "Personalized IT training on software of your choice",
    price: 120.0,
    category: "Services",
    image: "/it-training.jpg",
  },

  // Accessories
  {
    id: "15",
    name: "HDMI Cable (2M)",
    description: "High-speed HDMI 2.1 cable for 4K video",
    price: 12.99,
    category: "Accessories",
    image: "/hdmi-cable.jpg",
  },
  {
    id: "16",
    name: "USB-C Cable Pack (3)",
    description: "3-pack of durable USB-C charging and data cables",
    price: 19.99,
    category: "Accessories",
    image: "/usb-c-cable.jpg",
  },
  {
    id: "17",
    name: "Cable Organizer Kit",
    description: "Cable clips and organizers for desk management",
    price: 14.99,
    category: "Accessories",
    image: "/cable-organizer.png",
  },
  {
    id: "18",
    name: "Phone Screen Protector",
    description: "Tempered glass screen protector for most phones",
    price: 9.99,
    category: "Accessories",
    image: "/screen-protector.png",
  },
]

export function getCategories(): string[] {
  return Array.from(new Set(PRODUCTS.map((p) => p.category)))
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(lowerQuery) || p.description.toLowerCase().includes(lowerQuery),
  )
}
