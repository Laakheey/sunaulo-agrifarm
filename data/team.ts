import type { TeamMember } from "@/types";

/**
 * The people behind Sunaulo Agrifarm. Add, remove, or reorder entries here —
 * the team grid in `components/sections/Team.tsx` renders this list
 * automatically.
 */
export const TEAM: TeamMember[] = [
  {
    name: "Santosh Rawat",
    role: "Owner",
    bio: "Oversees the farm's fields, livestock and day-to-day operations.",
  },
  {
    name: "Tilak Bahadur Pandeya",
    role: "Accountant",
    bio: "Manages farm accounts, supplier payments and order records.",
  },
  {
    name: "Ramesh Chaudhary",
    role: "Farm Manager",
    bio: "Plans planting and harvest schedules across all plots.",
  },
  {
    name: "Sita Kumari Tharu",
    role: "Field Supervisor",
    bio: "Leads the field team for sowing, weeding and harvesting.",
  },
  {
    name: "Bishnu Prasad Adhikari",
    role: "Livestock Caretaker",
    bio: "Cares for the goats, cattle and poultry every day.",
  },
  {
    name: "Goma Devi Bhandari",
    role: "Farm Gate Sales",
    bio: "Runs the farm gate stall and handles walk-in customers.",
  },
];
