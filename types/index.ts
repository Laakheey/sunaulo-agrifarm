import type { LucideIcon } from "lucide-react";

/** A single link in the primary site navigation. */
export interface NavLink {
  label: string;
  href: string;
}

/** A product or category of produce sold from the farm. */
export interface Product {
  name: string;
  description: string;
  /** Short label describing how it's sold, e.g. "Sold by Pathi / 25kg". */
  unit: string;
  icon: LucideIcon;
}

/** The three working seasons of Dang's terai farming calendar. */
export type Season = "monsoon" | "winter" | "spring";

/** A single month in the farm's annual harvest calendar. */
export interface HarvestMonth {
  /** Three-letter month abbreviation, e.g. "Jan". */
  month: string;
  season: Season;
  /** What's happening in the fields this month. */
  focus: string;
  /** Crops being grown, sown, or harvested this month. */
  crops: string[];
}

/** A farming method or principle the farm follows. */
export interface Practice {
  title: string;
  description: string;
}

/** A photo in the farm gallery. */
export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

/** A frequently asked question and its answer. */
export interface FaqItem {
  question: string;
  answer: string;
}

/** A single line of contact/visiting information. */
export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
}

/** A headline statistic shown in the hero strip. */
export interface HeroStat {
  value: string;
  label: string;
}

/** An option in the order form's product dropdown. */
export interface OrderOption {
  label: string;
}

/** A member of the farm's team, shown with their name and role. */
export interface TeamMember {
  name: string;
  /** Job title / post, e.g. "Owner" or "Accountant". */
  role: string;
  /** Short optional description of their work on the farm. */
  bio?: string;
}

