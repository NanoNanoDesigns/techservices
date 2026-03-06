import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  // Brain,
  Monitor,
  Wrench,
  Download,
  // Globe,
  // ShieldCheck,
  Users,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  XCircle,
  Gauge,
  ShieldAlert,
  RotateCcw,
  MonitorSmartphone,
  Printer,
  Wifi,
  HardDrive,
  MailOpen,
  Clock,
  Stethoscope,
  BadgeCheck,
  KeyRound,
  AlertTriangle,
  Cpu,
  Heart,
  Home,
  ArrowUpRight,
  ShieldOff,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";

export default function TechServicesNano() {
  const services = [
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Computer Tune-Up / Performance Optimization",
      price: "$60",
      description:
        "Restore your computer to peak performance with a comprehensive tune-up.",
      includes: [
        "Startup optimization",
        "Disk cleanup and defragmentation",
        "Software updates",
        "Performance assessment",
      ],
    },
    {
      icon: <ShieldAlert className="h-8 w-8" />,
      title: "Basic Malware Removal",
      price: "$75",
      description:
        "Remove viruses, adware, and other malicious software from your system.",
      includes: [
        "Full system scan",
        "Malware and adware removal",
        "Browser cleanup",
        "Security recommendations",
      ],
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "Operating System Reinstall",
      price: "$95",
      description:
        "Fresh OS installation when your system needs a clean start.",
      includes: [
        "Clean OS installation",
        "Driver installation",
        "Windows/macOS updates",
        "Basic configuration",
      ],
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8" />,
      title: "New Computer Setup",
      price: "$75",
      description:
        "Get your new computer ready to use right out of the box.",
      includes: [
        "Initial setup and user account creation",
        "Software installation",
        "Email configuration",
        "Data migration assistance",
      ],
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Software Installation",
      price: "$45",
      description:
        "Professional installation and configuration of your software.",
      includes: [
        "Software installation",
        "License activation",
        "Basic configuration",
        "Compatibility verification",
      ],
    },
    {
      icon: <MailOpen className="h-8 w-8" />,
      title: "Email Setup / Configuration",
      price: "$45",
      description:
        "Set up or configure email on your computer, phone, or tablet.",
      includes: [
        "Email client setup",
        "Account configuration",
        "Contact and calendar sync",
        "Basic troubleshooting",
      ],
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: "Printer Setup",
      price: "$45",
      description:
        "Get your printer connected and working with all your devices.",
      includes: [
        "Printer installation",
        "Driver setup",
        "Network/wireless configuration",
        "Test printing",
      ],
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Router / Wi-Fi Setup",
      price: "$75",
      description:
        "Set up or optimize your home or small-office wireless network.",
      includes: [
        "Router installation and configuration",
        "Wi-Fi network setup",
        "Security configuration",
        "Device connectivity testing",
      ],
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "Basic Data Transfer",
      price: "$95",
      description:
        "Safely move your files, photos, and documents between devices.",
      includes: [
        "File and folder transfer",
        "Photo and document migration",
        "Transfer verification",
        "Basic organization",
      ],
    },
  ];

  const features = [
    "Free basic diagnostics",
    "Transparent flat-rate pricing",
    "90-day service guarantee",
    "Ethical, practical repairs",
    "Home & small-business focused",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Professional IT Services
                  <span className="block text-primary">You Can Trust</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Ethical, practical computer repair and IT support with
                  transparent flat-rate pricing. Free basic diagnostics on every
                  visit and a 90-day guarantee on all repairs.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-lg">
                {features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    {feature}
                  </Badge>
                ))}
              </div>
              <div className="space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                >
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

        {/* Our Approach Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Approach
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Honest computer repair focused on what you actually need — not
                  what makes us the most money
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2 lg:gap-8">
              <div className="flex gap-4">
                <Heart className="h-8 w-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Ethical &amp; Practical
                  </h3>
                  <p className="text-muted-foreground">
                    We recommend only the repairs you actually need. No
                    upselling, no unnecessary services, no pressure.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Home className="h-8 w-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Home &amp; Small-Business Focused
                  </h3>
                  <p className="text-muted-foreground">
                    We specialize in helping everyday users and small businesses
                    with practical, affordable tech support.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ArrowUpRight className="h-8 w-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Honest Referrals
                  </h3>
                  <p className="text-muted-foreground">
                    If a job is outside our scope, we&apos;ll tell you upfront
                    and refer you to a specialist who can help.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldOff className="h-8 w-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">No Upselling</h3>
                  <p className="text-muted-foreground">
                    We won&apos;t push products or services you don&apos;t need.
                    Our goal is to solve your problem, not grow your bill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flat Rate Service Menu */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Flat Rate Service Menu
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transparent, fixed pricing for common computer repair and
                  setup services — no surprises, no hidden fees
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-primary">{service.icon}</div>
                        <CardTitle className="text-lg">
                          {service.title}
                        </CardTitle>
                      </div>
                      <Badge className="text-sm font-bold shrink-0">
                        {service.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-3">
                      {service.description}
                    </CardDescription>
                    <div className="text-sm font-medium mb-2">Includes:</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Diagnostic Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every repair starts with understanding the problem — our
                  diagnostics help identify the right fix
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2 lg:gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Stethoscope className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-2xl">
                    Free Basic Diagnostic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      Free
                    </div>
                    <div className="text-sm text-muted-foreground">
                      up to 15 minutes
                    </div>
                  </div>
                  <p className="text-muted-foreground text-center">
                    Initial inspection to assess the issue and provide a
                    recommendation. Included with every service visit.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Clock className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-2xl">
                    Advanced Diagnostic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$50</div>
                    <div className="text-sm text-muted-foreground">
                      per hour
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Device disassembly and inspection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Extended hardware and software testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Software analysis and hardware tracing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Research and documentation</span>
                    </li>
                  </ul>
                  <div className="text-xs text-muted-foreground text-center pt-2">
                    Requires customer authorization before proceeding.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hourly Services / Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Hourly Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  For general technical work not covered by our flat-rate
                  service menu
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-md py-12">
              <Card className="relative">
                <CardHeader className="text-center">
                  <Wrench className="h-8 w-8 mx-auto text-primary" />
                  <CardTitle className="text-2xl">
                    General Technical Work
                  </CardTitle>
                  <CardDescription>
                    Flexible hourly rate for custom jobs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">$50</div>
                    <div className="text-sm text-muted-foreground">
                      per hour
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hardware cleaning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Minor hardware repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>System troubleshooting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Device inspection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>General technical assistance</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <div className="text-xs text-muted-foreground text-center">
                      Minimum 1 hour charge. Travel fee may apply for on-site
                      service.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Limitations Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Service Limitations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  For ethical and equipment reasons, there are some services we
                  are unable to provide
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2 lg:gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <KeyRound className="h-6 w-6 text-destructive" />
                    <CardTitle>Account &amp; Security Bypass</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Password bypass</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>BIOS password removal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Apple ID or iCloud bypass</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Microsoft account unlocking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Security lock removal</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    <CardTitle>Device Ownership Concerns</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Services will be declined if device ownership cannot be
                    reasonably verified. This policy exists to protect both our
                    customers and the community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-6 w-6 text-destructive" />
                    <CardTitle>Specialized Hardware Repairs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Micro-soldering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Logic board / motherboard repair</span>
                    </li>
                    {/* <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Smartphone screen replacement</span>
                    </li> */}
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Manufacturer-restricted repairs</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">
                    We can refer you to a specialist for these services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <HardDrive className="h-6 w-6 text-destructive" />
                    <CardTitle>Advanced Data Recovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Physically damaged drives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Failed SSD controllers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Cleanroom recovery</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">
                    We can refer you to a data recovery specialist.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 90-Day Service Guarantee Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <BadgeCheck className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  90-Day Service Guarantee
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  All repairs are tested before return and backed by our 90-day
                  warranty on parts and labor for the specific repair performed
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold mb-4">Covered</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>
                      Same issue recurring within 90 days of repair
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Parts installed during the original repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Labor related to the original repair</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Not Covered</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                    <span>New physical damage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                    <span>Unrelated software issues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                    <span>Post-service malware infections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                    <span>Environmental or electrical damage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                    <span>Normal hardware wear and tear</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to solve your IT challenges? Contact us today for a free
                basic diagnostic and quote.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Get in touch via email</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:techservicesnano@gmail.com"
                    className="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    techservicesnano@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Call</CardTitle>
                  <CardDescription>Business hours: 9am - 5pm</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-green-600">
                    <Link href="tel:+1234567890">+1 (541) 357-9862</Link>
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle>Follow</CardTitle>
                  <CardDescription>
                    Stay connected on social media
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-x-4">
                  <a
                    href="https://www.linkedin.com/in/nadine-ibrahim-1a794646/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-orange-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/NanoNanoDesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-orange-600 hover:underline"
                  >
                    GitHub
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Nadine Ibrahim. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
