import { useState } from "react";
import styled from "styled-components";
import type { Mod } from "../data/mods";

const Card = styled.article<{ $accent: string }>`
  position: relative;
  background: ${(p) => p.theme.colors.panel};
  border: 1px solid ${(p) => p.theme.colors.panelBorder};
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${(p) => p.$accent}, transparent 85%);
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

const Name = styled.h3`
  font-size: 20px;
  color: ${(p) => p.theme.colors.parchment};
  line-height: 1.3;
`;

const Version = styled.span`
  font-family: ${(p) => p.theme.font.body};
  font-size: 11px;
  color: ${(p) => p.theme.colors.muted};
  white-space: nowrap;
  padding-top: 4px;
`;

const Tagline = styled.p`
  font-size: 13.5px;
  color: ${(p) => p.theme.colors.emberBright};
  margin: -8px 0 0;
  font-style: italic;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.parchmentDim};
  margin: 0;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 11px;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${(p) => p.theme.colors.panelBorder};
  color: ${(p) => p.theme.colors.parchmentDim};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  gap: 12px;
`;

const Size = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colors.muted};
`;

const DownloadButton = styled.a`
  font-family: ${(p) => p.theme.font.body};
  font-weight: 600;
  font-size: 13.5px;
  padding: 10px 20px;
  border-radius: ${(p) => p.theme.radius};
  background: ${(p) => p.theme.colors.ember};
  color: #1a1206;
  text-decoration: none;
  text-align: center;
  transition: background 0.15s ease, transform 0.1s ease;

  &:hover {
    background: ${(p) => p.theme.colors.emberBright};
    transform: translateY(-1px);
  }
`;

const FilesToggle = styled.button`
  background: none;
  border: none;
  color: ${(p) => p.theme.colors.muted};
  font-size: 12px;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-decoration-style: dotted;

  &:hover {
    color: ${(p) => p.theme.colors.emberBright};
  }
`;

const FileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0 0;
  border-top: 1px solid ${(p) => p.theme.colors.panelBorder};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FileRow = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 12.5px;
  color: ${(p) => p.theme.colors.parchmentDim};

  a {
    color: ${(p) => p.theme.colors.emberBright};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export function ModCard({ mod }: { mod: Mod }) {
  const [showFiles, setShowFiles] = useState(false);

  return (
    <Card $accent={mod.accent}>
      <TopRow>
        <Name>{mod.name}</Name>
        <Version>v{mod.version}</Version>
      </TopRow>
      <Tagline>{mod.tagline}</Tagline>
      <Description>{mod.description}</Description>
      <Tags>
        {mod.genres.map((g) => (
          <Tag key={g}>{g}</Tag>
        ))}
      </Tags>
      <Footer>
        <Size>{mod.downloadSize}</Size>
        <DownloadButton href={mod.downloadUrl} download>
          Download
        </DownloadButton>
      </Footer>
      {mod.files && mod.files.length > 0 && (
        <>
          <FilesToggle onClick={() => setShowFiles((v) => !v)}>
            {showFiles
              ? "Hide file list"
              : `What's inside (${mod.files.length} ${mod.files.length === 1 ? "file" : "files"})`}
          </FilesToggle>
          {showFiles && (
            <FileList>
              {mod.files.map((f) => (
                <FileRow key={f.label}>
                  <span>{f.label}</span>
                  <span>{f.size}</span>
                </FileRow>
              ))}
            </FileList>
          )}
        </>
      )}
    </Card>
  );
}
