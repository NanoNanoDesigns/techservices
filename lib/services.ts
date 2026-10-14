export const HOURLY_RATE = 50;

export type Service = {
  id: string;
  title: string;
  durationMinutes: number;
  description: string;
};

export const services: Service[] = [
  {
    id: "it-services-businesses",
    title: "IT Services for Businesses",
    durationMinutes: 60,
    description: "IT infrastructure repair, maintenance, and consultation.",
  },
  {
    id: "tune-up",
    title: "Computer Tune-Up / Performance Optimization",
    durationMinutes: 60,
    description: "Restore your computer to peak performance with a comprehensive tune-up.",
  },
  {
    id: "malware-removal",
    title: "Basic Malware Removal",
    durationMinutes: 90,
    description: "Remove viruses, adware, and other malicious software from your system.",
  },
  {
    id: "os-reinstall",
    title: "Operating System Reinstall",
    durationMinutes: 120,
    description: "Fresh OS installation when your system needs a clean start.",
  },
  {
    id: "new-computer-setup",
    title: "New Computer Setup",
    durationMinutes: 90,
    description: "Get your new computer ready to use right out of the box.",
  },
  {
    id: "software-install",
    title: "Software Installation",
    durationMinutes: 60,
    description: "Professional installation and configuration of your software.",
  },
  {
    id: "email-setup",
    title: "Email Setup / Configuration",
    durationMinutes: 60,
    description: "Set up or configure email on your computer, phone, or tablet.",
  },
  {
    id: "printer-setup",
    title: "Printer Setup",
    durationMinutes: 60,
    description: "Get your printer connected and working with all your devices.",
  },
  {
    id: "wifi-setup",
    title: "Router / Wi-Fi Setup",
    durationMinutes: 90,
    description: "Set up or optimize your home or small-office wireless network.",
  },
  {
    id: "data-transfer",
    title: "Basic Data Transfer",
    durationMinutes: 120,
    description: "Safely move your files, photos, and documents between devices.",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
