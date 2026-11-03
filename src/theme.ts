export const theme = {
  colors: {
    bg: "#0f0d0a",
    bgAlt: "#171310",
    panel: "#1d1812",
    panelBorder: "#3a2f22",
    ember: "#d98f2b",
    emberBright: "#f2b84b",
    blood: "#8c2a2a",
    parchment: "#e9ddc3",
    parchmentDim: "#b8ab8c",
    muted: "#7d7360",
  },
  font: {
    display: "'Cinzel', 'Georgia', serif",
    body: "'Inter', system-ui, sans-serif",
  },
  radius: "6px",
} as const;

export type AppTheme = typeof theme;
