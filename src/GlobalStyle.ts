import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    min-height: 100%;
  }

  body {
    background: ${(p) => p.theme.colors.bg};
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(217, 143, 43, 0.08), transparent),
      repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.012) 0px,
        rgba(255, 255, 255, 0.012) 1px,
        transparent 1px,
        transparent 3px
      );
    color: ${(p) => p.theme.colors.parchment};
    font-family: ${(p) => p.theme.font.body};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: ${(p) => p.theme.font.display};
    letter-spacing: 0.02em;
    margin: 0;
  }

  a {
    color: inherit;
  }

  ::selection {
    background: ${(p) => p.theme.colors.ember};
    color: ${(p) => p.theme.colors.bg};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(p) => p.theme.colors.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.panelBorder};
    border-radius: 6px;
  }
`;
