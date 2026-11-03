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
  url: string;
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
      "https://github.com/REPLACE_ME/skyrim-mods-site/releases/download/apocalypse-10.2/Apocalypse-Magic-of-Skyrim.zip",
    downloadSize: "52 MB",
    files: [
      { label: "Apocalypse - Magic of Skyrim.esp", url: "#", size: "1.4 MB" },
      { label: "Apocalypse - Magic of Skyrim.bsa", url: "#", size: "21.6 MB" },
      {
        label: "Apocalypse - Magic of Skyrim - Textures.bsa",
        url: "#",
        size: "36.5 MB",
      },
    ],
    accent: "#8a5cf6",
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
