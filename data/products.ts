import { Bean, Beef, Carrot, Droplet, Egg, Flower2, Wheat } from "lucide-react";
import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    name: "Basmati & Local Paddy Rice",
    description:
      "Sun-dried, stone-milled rice grown across our terai paddies — including fragrant Basmati and traditional local varieties.",
    unit: "Sold by Mana / Pathi / 25kg",
    icon: Wheat,
  },
  {
    name: "Lentils & Pulses (Dal)",
    description:
      "Masuro, rahar and kalo dal — slow-grown on rotation with our cereal crops for richer flavour and naturally improved soil.",
    unit: "Sold by Pathi / kg",
    icon: Bean,
  },
  {
    name: "Cold-Pressed Mustard Oil",
    description:
      "Tori (mustard seed) pressed in small batches at our farm mill — unrefined, aromatic, and ready for your kitchen.",
    unit: "Sold by Bottle / Litre",
    icon: Droplet,
  },
  {
    name: "Seasonal Vegetables",
    description:
      "Cauliflower, tomato, okra, gourds, beans and leafy greens grown across the year, harvested fresh for local markets.",
    unit: "Sold daily — farm gate",
    icon: Carrot,
  },
  {
    name: "Maize & Millet",
    description:
      "Makai and kodo grown on our upland plots — used for flour, livestock feed, and traditional dishes.",
    unit: "Sold by Pathi / 25kg",
    icon: Wheat,
  },
  {
    name: "Farm-Fresh Eggs & Poultry",
    description:
      "Free-range hens raised on our grain and greens — eggs collected daily, birds reared the traditional way.",
    unit: "Sold by Dozen / Live bird",
    icon: Egg,
  },
  {
    name: "Goat Meat & Dairy",
    description:
      "Pasture-raised goats for meat, plus fresh cow and buffalo milk, curd and ghee from our small dairy herd.",
    unit: "Pre-order recommended",
    icon: Beef,
  },
  {
    name: "Raw Forest Honey",
    description:
      "Wild and apiary honey gathered from the foothills around Dang — unprocessed, raw, and naturally crystallising.",
    unit: "Sold by Jar / kg",
    icon: Flower2,
  },
];

export const ORDER_PRODUCT_OPTIONS: string[] = [
  "Rice (Paddy)",
  "Lentils / Dal",
  "Mustard Oil",
  "Seasonal Vegetables",
  "Maize / Millet",
  "Eggs / Poultry",
  "Goat Meat / Dairy",
  "Honey",
  "Something else",
];
