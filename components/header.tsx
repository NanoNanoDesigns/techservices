import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 mx-4 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Tech Services Nano"
              className="h-12 w-16"
            />
            <span className="font-bold text-xl">Tech Services Nano</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/#services"
            className="transition-colors hover:text-foreground/80"
          >
            Services
          </Link>
          <Link
            href="/#pricing"
            className="transition-colors hover:text-foreground/80"
          >
            Pricing
          </Link>
          <Link href="/documents" className="transition-colors hover:text-foreground/80">
            Documents
          </Link>
          {/* <Link href="/shop" className="transition-colors hover:text-foreground/80">
            Shop
          </Link> */}
          <Link
            href="/#contact"
            className="transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button asChild>
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
