import styled from "styled-components";

const Wrap = styled.footer`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 24px 72px;
  text-align: center;
`;

const Box = styled.div`
  border: 1px dashed ${(p) => p.theme.colors.panelBorder};
  border-radius: ${(p) => p.theme.radius};
  padding: 20px 24px;
  color: ${(p) => p.theme.colors.parchmentDim};
  font-size: 13px;
  line-height: 1.7;
`;

const Title = styled.div`
  font-family: ${(p) => p.theme.font.display};
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.ember};
  margin-bottom: 10px;
`;

export function Footer() {
  return (
    <Wrap>
      <Box>
        <Title>Installing with Vortex</Title>
        Download the archive above, then open Vortex &rarr; Mods &rarr;
        drag the <code>.zip</code> into the drop zone (or use "Install From
        File"). Enable it and run deployment as usual. There's no one-click
        Nexus-style popup here since these files aren't hosted on Nexus's
        servers &mdash; but manual install takes about ten seconds.
      </Box>
    </Wrap>
  );
}
