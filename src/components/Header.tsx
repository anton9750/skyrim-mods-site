import styled from "styled-components";

const Wrap = styled.header`
  position: relative;
  padding: 72px 24px 48px;
  text-align: center;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 60% 100% at 50% 0%,
    rgba(217, 143, 43, 0.18),
    transparent 70%
  );
  pointer-events: none;
`;

const Eyebrow = styled.div`
  font-family: ${(p) => p.theme.font.body};
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.ember};
  margin-bottom: 14px;
`;

const Title = styled.h1`
  font-size: clamp(32px, 6vw, 56px);
  color: ${(p) => p.theme.colors.parchment};
  text-shadow: 0 0 24px rgba(217, 143, 43, 0.25);
`;

const Rule = styled.div`
  width: 160px;
  height: 1px;
  margin: 22px auto 18px;
  background: linear-gradient(
    90deg,
    transparent,
    ${(p) => p.theme.colors.ember},
    transparent
  );
`;

const Sub = styled.p`
  max-width: 560px;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.parchmentDim};
  font-size: 15px;
  line-height: 1.6;
`;

export function Header() {
  return (
    <Wrap>
      <Glow />
      <Eyebrow>A Modder's Hold</Eyebrow>
      <Title>Skyrim Mod Vault</Title>
      <Rule />
      <Sub>
        Self-hosted mods, no paywalls, no download timers. Grab the files
        directly and drop them into your <code>Data</code> folder, or
        drag the archive into Vortex.
      </Sub>
    </Wrap>
  );
}
