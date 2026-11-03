export type Genre =
  | "Magic"
  | "Combat"
  | "Gameplay"
  | "Immersion"
  | "Graphics"
  | "Quests"
  | "Armor & Weapons"
  | "UI"
  | "Audio"
  | "Utilities";

export interface ModFile {
  label: string;
  size: string;
}

export interface Mod {
  id: string;
  name: string;
  tagline: string;
  description: string;
  genres: Genre[];
  version: string;
  requirements?: string[];
  requiredBy?: string[];
  downloadUrl: string;
  downloadSize: string;
  files?: ModFile[];
  accent: string;
}

export const mods: Mod[] = [
  {
    id: "apocalypse-magic-of-skyrim",
    name: "Apocalypse - Magic of Skyrim",
    tagline: "155 new spells, balanced and lore-friendly.",
    description:
      "Adds a huge roster of new spells across every school of magic — from " +
      "necromancy and elemental destruction to illusion and support magic. " +
      "Every spell is hand-tuned for vanilla balance and plays nicely with " +
      "perk overhauls like Ordinator.",
    genres: ["Magic", "Gameplay"],
    version: "10.2",
    requirements: ["Skyrim Special Edition", "SKSE64 (recommended)"],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/apocalypse-10.2/Apocalypse-Magic-of-Skyrim.zip",
    downloadSize: "52 MB",
    files: [
      { label: "Apocalypse - Magic of Skyrim.esp", size: "1.4 MB" },
      { label: "Apocalypse - Magic of Skyrim.bsa", size: "21.6 MB" },
      {
        label: "Apocalypse - Magic of Skyrim - Textures.bsa",
        size: "36.5 MB",
      },
    ],
    accent: "#8a5cf6",
  },
  {
    id: "great-city-of-dawnstar",
    name: "The Great City of Dawnstar",
    tagline: "Turns Dawnstar into a real, lived-in city.",
    description:
      "Expands Dawnstar with new buildings, streets, and NPCs, giving one " +
      "of vanilla Skyrim's smallest holds the scale and atmosphere of a " +
      "proper city without breaking existing quests or navmesh.",
    genres: ["Immersion"],
    version: "1.0",
    requirements: [
      "Skyrim Special Edition",
      "Resources - The Great Cities (below)",
    ],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/great-city-of-dawnstar-1.0/The-Great-City-of-Dawnstar.zip",
    downloadSize: "650 KB",
    files: [{ label: "The Great City of Dawnstar.esp", size: "637 KB" }],
    accent: "#4c9a7a",
  },
  {
    id: "great-city-of-falkreath",
    name: "The Great City of Falkreath",
    tagline: "A proper frontier town, not a hamlet.",
    description:
      "Expands Falkreath with new buildings, streets, and NPCs, giving the " +
      "hold capital the scale and atmosphere of a real frontier town " +
      "without breaking existing quests or navmesh.",
    genres: ["Immersion"],
    version: "1.0",
    requirements: [
      "Skyrim Special Edition",
      "Resources - The Great Cities (below)",
    ],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/great-city-of-falkreath-1.0/The-Great-City-of-Falkreath.zip",
    downloadSize: "435 KB",
    files: [{ label: "The Great City of Falkreath.esp", size: "434 KB" }],
    accent: "#8a6a3a",
  },
  {
    id: "great-city-of-morthal",
    name: "The Great City of Morthal",
    tagline: "The swamp town, built out properly.",
    description:
      "Expands Morthal with new buildings, streets, and NPCs, turning the " +
      "smallest hold capital in Skyrim into a real, lived-in town without " +
      "breaking existing quests or navmesh.",
    genres: ["Immersion"],
    version: "1.0",
    requirements: [
      "Skyrim Special Edition",
      "Resources - The Great Cities (below)",
    ],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/great-city-of-morthal-1.0/The-Great-City-of-Morthal.zip",
    downloadSize: "300 KB",
    files: [{ label: "The Great City of Morthal.esp", size: "300 KB" }],
    accent: "#4a6a7a",
  },
  {
    id: "great-city-of-solitude",
    name: "The Great City of Solitude",
    tagline: "The imperial capital finally looks like one.",
    description:
      "Expands Solitude with new buildings, streets, and NPCs, giving the " +
      "seat of the Empire in Skyrim the scale and density its status " +
      "deserves, without breaking existing quests or navmesh.",
    genres: ["Immersion"],
    version: "1.0",
    requirements: [
      "Skyrim Special Edition",
      "Resources - The Great Cities (below)",
    ],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/great-city-of-solitude-1.0/The-Great-City-of-Solitude.zip",
    downloadSize: "1.1 MB",
    files: [{ label: "The Great City of Solitude.esp", size: "1.1 MB" }],
    accent: "#9a4a4a",
  },
  {
    id: "great-city-of-winterhold",
    name: "The Great City of Winterhold",
    tagline: "Before the Collapse, a city worth remembering.",
    description:
      "Expands Winterhold with new buildings, streets, and NPCs, restoring " +
      "a sense of scale to what the game treats as a ruined afterthought, " +
      "without breaking existing quests or navmesh.",
    genres: ["Immersion"],
    version: "4.0",
    requirements: [
      "Skyrim Special Edition",
      "Resources - The Great Cities (below)",
    ],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/great-city-of-winterhold-4.0/The-Great-City-of-Winterhold.zip",
    downloadSize: "1.4 MB",
    files: [{ label: "The Great City of Winterhold v4.esp", size: "1.4 MB" }],
    accent: "#4a5a9a",
  },
  {
    id: "resources-the-great-cities",
    name: "Resources - The Great Cities",
    tagline: "The shared asset pack every Great City mod needs.",
    description:
      "The common meshes, textures, and base records that Dawnstar, " +
      "Falkreath, Morthal, Solitude, and Winterhold all build on. Install " +
      "this once alongside whichever city mods you're using — it has no " +
      "effect in-game by itself.",
    genres: ["Utilities"],
    version: "1.0",
    requirements: ["Skyrim Special Edition"],
    requiredBy: [
      "The Great City of Dawnstar",
      "The Great City of Falkreath",
      "The Great City of Morthal",
      "The Great City of Solitude",
      "The Great City of Winterhold",
    ],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/resources-great-cities-1.0/Resources-The-Great-Cities.zip",
    downloadSize: "313 MB",
    files: [
      { label: "Resources - The Great Cities.esp", size: "< 1 MB" },
      { label: "Resources - The Great Cities.bsa", size: "152 MB" },
      {
        label: "Resources - The Great Cities - Textures.bsa",
        size: "181 MB",
      },
    ],
    accent: "#b8ab8c",
  },
  {
    id: "ordinator-perks-of-skyrim",
    name: "Ordinator - Perks of Skyrim",
    tagline: "A complete perk overhaul, done right.",
    description:
      "Rebuilds every perk tree from scratch with hundreds of new, " +
      "meaningfully distinct perks, turning each build — warrior, mage, " +
      "thief, or hybrid — into a real set of choices instead of a " +
      "straight line to the best option. Plays well with Apocalypse.",
    genres: ["Gameplay", "Combat", "Magic"],
    version: "9.3",
    requirements: ["Skyrim Special Edition", "SKSE64 (recommended)"],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/ordinator-9.3/Ordinator-Perks-of-Skyrim.zip",
    downloadSize: "11 MB",
    files: [
      { label: "Ordinator - Perks of Skyrim.esp", size: "1.8 MB" },
      { label: "Ordinator - Perks of Skyrim.bsa", size: "7.9 MB" },
      {
        label: "Ordinator - Perks of Skyrim - Textures.bsa",
        size: "4.5 MB",
      },
    ],
    accent: "#c94848",
  },
];

export const allGenres: Genre[] = [
  "Magic",
  "Combat",
  "Gameplay",
  "Immersion",
  "Graphics",
  "Quests",
  "Armor & Weapons",
  "UI",
  "Audio",
  "Utilities",
];
