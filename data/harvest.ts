import type { HarvestMonth } from "@/types";

export const HARVEST_CALENDAR: HarvestMonth[] = [
  { month: "Jan", season: "winter", focus: "Winter vegetables & mustard", crops: ["Mustard", "Cauliflower"] },
  { month: "Feb", season: "winter", focus: "Mustard harvest & greens", crops: ["Mustard", "Spinach", "Peas"] },
  { month: "Mar", season: "winter", focus: "Wheat & lentil harvest", crops: ["Wheat", "Masuro Dal"] },
  { month: "Apr", season: "spring", focus: "Spring sowing begins", crops: ["Maize", "Mango bloom"] },
  { month: "May", season: "spring", focus: "Paddy nursery & early veg", crops: ["Rice nursery", "Okra"] },
  { month: "Jun", season: "monsoon", focus: "Monsoon rice planting", crops: ["Paddy rice", "Maize"] },
  { month: "Jul", season: "monsoon", focus: "Peak monsoon growth", crops: ["Paddy rice", "Ginger"] },
  { month: "Aug", season: "monsoon", focus: "Monsoon vegetables", crops: ["Cucumber", "Beans"] },
  { month: "Sep", season: "monsoon", focus: "Crops fill out", crops: ["Paddy rice", "Soybean"] },
  { month: "Oct", season: "monsoon", focus: "Rice harvest begins", crops: ["Paddy rice", "Mustard sown"] },
  { month: "Nov", season: "winter", focus: "Main rice harvest", crops: ["Paddy rice", "Lentils sown"] },
  { month: "Dec", season: "winter", focus: "Winter sowing", crops: ["Wheat", "Cabbage"] },
];

export const SEASON_LABELS: Record<HarvestMonth["season"], string> = {
  monsoon: "Monsoon (Paddy season)",
  winter: "Winter (Wheat, mustard, lentils)",
  spring: "Spring (Sowing & nursery)",
};
