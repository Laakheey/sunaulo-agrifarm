import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ContactDetail, HeroStat, NavLink } from "@/types";

export const SITE = {
  name: "Sunaulo Agrifarm",
  tagline: "Ghorahi-11 · Dang · Nepal",
  description:
    "Sunaulo Agrifarm grows and sells fresh, seasonal produce from Ghorahi-11, Dang, Nepal — rice, lentils, mustard oil, vegetables and more, straight from our fields to your table.",
  phone: "+977 98X-XXXXXXX",
  email: "sunauloagrifarm@gmail.com",
  address:
    "Sunaulo Agrifarm, Ward No. 11, Ghorahi Sub-Metropolitan City, Dang, Lumbini Province, Nepal",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Harvest", href: "#harvest" },
  { label: "Products", href: "#products" },
  { label: "Farming", href: "#practices" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export const HERO_STATS: HeroStat[] = [
  { value: "8+", label: "Bigha under cultivation" },
  { value: "12", label: "Crops grown through the year" },
  { value: "3", label: "Generations farming this land" },
  { value: "100%", label: "Sold fresh from Ghorahi-11" },
];

export const FOOTER_LINK_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "About the farm", href: "#about" },
      { label: "Harvest calendar", href: "#harvest" },
      { label: "Our products", href: "#products" },
      { label: "Farming practices", href: "#practices" },
    ],
  },
  {
    title: "Visit & order",
    links: [
      { label: "Find the farm", href: "#visit" },
      { label: "Order produce", href: "#contact" },
      { label: "FAQs", href: "#contact" },
    ],
  },
];


export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    label: "Address",
    value: SITE.address,
  },
  {
    icon: Clock,
    label: "Farm gate hours",
    value: "Sunday – Friday, 7:00 AM – 6:00 PM. Saturdays by prior arrangement.",
  },
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: `${SITE.phone} — for orders, deliveries and bulk pricing.`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
  },
];
