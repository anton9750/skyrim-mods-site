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
    requirements: ["Skyrim Special Edition"],
    downloadUrl:
      "https://github.com/anton9750/skyrim-mods-site/releases/download/great-city-of-dawnstar-1.0/The-Great-City-of-Dawnstar.zip",
    downloadSize: "650 KB",
    files: [{ label: "The Great City of Dawnstar.esp", size: "637 KB" }],
    accent: "#4c9a7a",
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
