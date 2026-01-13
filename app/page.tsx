import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  Monitor,
  Wrench,
  Download,
  GraduationCap,
  Users,
  Globe,
  Network,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

export default function TechServicesNano() {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Computer Repair",
      description:
        "Professional diagnosis and repair of desktops, laptops, and all-in-one computers. Hardware and software troubleshooting.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Console Repair",
      description:
        "Expert repair services for gaming consoles including PlayStation, Xbox, Nintendo Switch, and retro gaming systems.",
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Software Installation",
      description:
        "Operating system installation, software setup, driver updates, and system optimization for peak performance.",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Tutoring",
      description:
        "One-on-one technology tutoring for individuals looking to improve their computer skills and digital literacy.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Corporate Training",
      description:
        "Professional training sessions for businesses on software usage, cybersecurity, and digital workflow optimization.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Design",
      description:
        "Custom website development and design services for businesses looking to establish their online presence.",
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Networking Solutions",
      description:
        "Network setup, configuration, and troubleshooting for homes and businesses. Wi-Fi optimization and security.",
    },
        {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Cybersecurity Services",
      description:
        "Comprehensive security assessments, vulnerability testing, and threat mitigation strategies to protect your business.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI solutions",
      description:
        "Implementing AI-driven tools and solutions to enhance business operations, customer engagement, and data analysis.",
    },
  ];

  const features = [
    "Fast turnaround times",
    "Competitive pricing",
    "Expert technicians",
    "Quality guarantee",
    "On-site service available",
    "Free diagnostics",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Monitor className="h-6 w-6" />
              <span className="font-bold text-xl">Tech Services Nano</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#services" className="transition-colors hover:text-foreground/80">
              Services
            </Link>
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild>
              <Link href="#contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Professional IT Services
                  <span className="block text-primary">You Can Trust</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Tech Services Nano provides comprehensive IT solutions for individuals and businesses. From computer
                  repair to website design, we handle all your technology needs with expertise and care.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="#services">
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive range of IT services to meet all your technology needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="text-primary">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tutoring & Training Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tutoring & Training Programs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Personalized learning experiences designed to boost your technology skills and confidence
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <CardTitle>Individual Tutoring</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      One-on-one personalized sessions tailored to your specific learning needs and pace.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Computer basics and digital literacy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Microsoft Office Suite (Word, Excel, PowerPoint)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Internet safety and email management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Social media and online communication</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Smartphone and tablet usage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-primary" />
                      <CardTitle>Group Training</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Cost-effective group sessions perfect for families, senior centers, or small businesses.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Senior-friendly technology workshops</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Family digital safety sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Small business software training</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Cybersecurity awareness workshops</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-6 w-6 text-primary" />
                      <CardTitle>Corporate Training</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Professional development programs to enhance your team's technical capabilities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Software implementation and adoption</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Digital workflow optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Cybersecurity best practices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Cloud services and collaboration tools</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Custom training programs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="bg-primary/10 p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-bold">Training Formats Available</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-semibold">In-Person</h4>
                      <p className="text-muted-foreground">At your location or our office</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Remote</h4>
                      <p className="text-muted-foreground">Via video conferencing</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Hybrid</h4>
                      <p className="text-muted-foreground">Combination of both formats</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Flexible</h4>
                      <p className="text-muted-foreground">Scheduled around your needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fair, competitive rates with no hidden fees. Quality service at affordable prices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="relative">
                <CardHeader className="text-center">
                  <Wrench className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-2xl">Repair Services</CardTitle>
                  <CardDescription>Computer & console repair</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$75</div>
                    <div className="text-sm text-muted-foreground">per hour</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Free initial diagnosis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Parts at cost + 10%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>90-day warranty on repairs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>On-site service available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Emergency service options</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <div className="text-xs text-muted-foreground text-center">
                      Minimum 1 hour charge. Travel fee may apply for on-site service.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative border-primary">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="text-center">
                  <GraduationCap className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-2xl">Individual Tutoring</CardTitle>
                  <CardDescription>One-on-one personalized sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$60</div>
                    <div className="text-sm text-muted-foreground">per hour</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Customized learning plan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>In-person or remote options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Progress tracking included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Learning materials provided</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <div className="text-xs text-muted-foreground text-center">
                      Package deals available. Senior discounts offered.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-2xl">Group Training</CardTitle>
                  <CardDescription>Small groups & corporate training</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$45</div>
                    <div className="text-sm text-muted-foreground">per person/hour</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>2-8 participants optimal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom curriculum available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Group exercises and activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Take-home resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Follow-up support included</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <div className="text-xs text-muted-foreground text-center">
                      Minimum 2-hour sessions. Corporate rates available for larger groups.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto max-w-4xl mt-12">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Additional Services & Packages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Website Design & Development</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Basic website (5 pages)</span>
                          <span className="font-medium">$1,200</span>
                        </li>
                        <li className="flex justify-between">
                          <span>E-commerce site</span>
                          <span className="font-medium">$2,500+</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Website maintenance</span>
                          <span className="font-medium">$100/month</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Networking & Installation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Network setup/configuration</span>
                          <span className="font-medium">$150-300</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Software installation</span>
                          <span className="font-medium">$50-100</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Data transfer/backup</span>
                          <span className="font-medium">$75-150</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      <strong>Need a custom quote?</strong> Contact us for complex projects, enterprise solutions, or
                      bulk training packages. We offer competitive rates for long-term contracts and repeat customers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Tech Services Nano?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With years of experience in the IT industry, we provide reliable, efficient, and cost-effective
                    solutions for all your technology challenges.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Get Started Today</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="tel:+1234567890">Call Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid gap-4 p-8 bg-muted rounded-lg">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">Professional Service</h3>
                    <p className="text-muted-foreground">
                      Certified technicians with extensive experience in all areas of IT support and development.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Repairs Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Websites Built</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to solve your IT challenges? Contact us today for a free consultation and quote.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@techservicesnano.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>123 Tech Street, Digital City, DC 12345</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Business Hours</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 10:00 AM - 4:00 PM</div>
                    <div>Sunday: Emergency calls only</div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Needed
                    </label>
                    <Input id="service" placeholder="e.g., Computer repair, Website design" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Describe your IT needs or issue" className="min-h-[100px]" />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Tech Services Nano. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
