import { useState } from "react";
import styled from "styled-components";
import type { Mod } from "../data/mods";

const Wrap = styled.div`
  max-width: 920px;
  margin: 0 auto 36px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  font-family: ${(p) => p.theme.font.body};
  font-weight: 600;
  font-size: 14px;
  padding: 11px 24px;
  border-radius: ${(p) => p.theme.radius};
  background: transparent;
  color: ${(p) => p.theme.colors.emberBright};
  border: 1px solid ${(p) => p.theme.colors.ember};
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover:not(:disabled) {
    background: rgba(217, 143, 43, 0.14);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const Hint = styled.p`
  margin: 0;
  font-size: 11.5px;
  color: ${(p) => p.theme.colors.muted};
  text-align: center;
  max-width: 440px;
`;

function triggerDownload(url: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function DownloadAllButton({ mods }: { mods: Mod[] }) {
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    if (downloading || mods.length === 0) return;
    setDownloading(true);
    mods.forEach((mod, i) => {
      setTimeout(() => {
        triggerDownload(mod.downloadUrl);
        if (i === mods.length - 1) {
          setTimeout(() => setDownloading(false), 400);
        }
      }, i * 500);
    });
  };

  return (
    <Wrap>
      <Button onClick={handleClick} disabled={downloading}>
        {downloading
          ? "Starting downloads..."
          : `Download All ${mods.length} Mods`}
      </Button>
      <Hint>
        Fires every file as a separate download. Your browser may ask
        permission for multiple downloads the first time &mdash; allow it to
        get them all.
      </Hint>
    </Wrap>
  );
}
