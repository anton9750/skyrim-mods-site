import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.footer`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 24px 72px;
`;

const Box = styled.div`
  border: 1px solid ${(p) => p.theme.colors.panelBorder};
  border-radius: ${(p) => p.theme.radius};
  overflow: hidden;
`;

const Toggle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${(p) => p.theme.colors.panel};
  border: none;
  cursor: pointer;
  padding: 18px 24px;
  font-family: ${(p) => p.theme.font.display};
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.ember};
  transition: background 0.15s ease;

  &:hover {
    background: rgba(217, 143, 43, 0.08);
  }
`;

const Chevron = styled.span<{ $open: boolean }>`
  display: inline-block;
  transition: transform 0.2s ease;
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
  font-size: 11px;
`;

const Panel = styled.div<{ $open: boolean }>`
  max-height: ${(p) => (p.$open ? "600px" : "0")};
  overflow: hidden;
  transition: max-height 0.25s ease;
`;

const PanelInner = styled.div`
  padding: 4px 28px 26px;
`;

const Steps = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Step = styled.li`
  counter-increment: step;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  text-align: left;

  &::before {
    content: counter(step);
    flex: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid ${(p) => p.theme.colors.ember};
    color: ${(p) => p.theme.colors.emberBright};
    font-family: ${(p) => p.theme.font.body};
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StepText = styled.div`
  font-size: 13.5px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.parchmentDim};
  padding-top: 2px;

  code {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid ${(p) => p.theme.colors.panelBorder};
    border-radius: 3px;
    padding: 1px 5px;
    font-size: 12px;
  }
`;

const Note = styled.p`
  margin: 18px 0 0;
  font-size: 12px;
  color: ${(p) => p.theme.colors.muted};
  font-style: italic;
  text-align: left;
`;

const steps = [
  <>
    Click <strong>Download</strong> on a mod card (or{" "}
    <strong>Download All</strong> at the top) to grab the <code>.zip</code>{" "}
    file. It lands in your browser's normal downloads folder.
  </>,
  <>
    Open <strong>Vortex</strong> and go to the <strong>Mods</strong> page on
    the left sidebar.
  </>,
  <>
    Drag the downloaded <code>.zip</code> straight from your file explorer
    onto the Vortex window and drop it &mdash; Vortex shows a drop zone and
    installs it automatically. No zip-opening required.
  </>,
  <>
    Prefer not to drag? Click <strong>Install From File</strong> at the top
    of the Mods page instead and pick the <code>.zip</code> from your
    downloads folder.
  </>,
  <>
    Tick the checkbox next to the newly installed mod to enable it, then hit{" "}
    <strong>Deploy Mods</strong> at the bottom of the page if Vortex doesn't
    deploy automatically.
  </>,
  <>
    Launch Skyrim through Vortex. Done &mdash; repeat for each mod if you
    used Download All.
  </>,
];

export function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <Wrap>
      <Box>
        <Toggle onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          How to get it into Vortex
          <Chevron $open={open}>&#9662;</Chevron>
        </Toggle>
        <Panel $open={open}>
          <PanelInner>
            <Steps>
              {steps.map((text, i) => (
                <Step key={i}>
                  <StepText>{text}</StepText>
                </Step>
              ))}
            </Steps>
            <Note>
              There's no one-click Nexus-style popup here since these files
              aren't hosted on Nexus's servers and can't issue an{" "}
              <code>nxm://</code> link &mdash; but the drag-and-drop above
              takes about ten seconds per mod.
            </Note>
          </PanelInner>
        </Panel>
      </Box>
    </Wrap>
  );
}
