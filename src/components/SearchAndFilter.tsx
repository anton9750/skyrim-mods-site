import styled from "styled-components";
import type { Genre } from "../data/mods";

const Wrap = styled.div`
  max-width: 920px;
  margin: 0 auto 40px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  background: ${(p) => p.theme.colors.panel};
  border: 1px solid ${(p) => p.theme.colors.panelBorder};
  color: ${(p) => p.theme.colors.parchment};
  font-family: ${(p) => p.theme.font.body};
  font-size: 15px;
  padding: 14px 18px;
  border-radius: ${(p) => p.theme.radius};
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: ${(p) => p.theme.colors.muted};
  }

  &:focus {
    border-color: ${(p) => p.theme.colors.ember};
    box-shadow: 0 0 0 3px rgba(217, 143, 43, 0.15);
  }
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const GenreChip = styled.button<{ $active: boolean }>`
  font-family: ${(p) => p.theme.font.body};
  font-size: 13px;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 999px;
  cursor: pointer;
  border: 1px solid
    ${(p) => (p.$active ? p.theme.colors.ember : p.theme.colors.panelBorder)};
  background: ${(p) =>
    p.$active ? "rgba(217, 143, 43, 0.16)" : p.theme.colors.panel};
  color: ${(p) => (p.$active ? p.theme.colors.emberBright : p.theme.colors.parchmentDim)};
  transition: all 0.15s ease;

  &:hover {
    border-color: ${(p) => p.theme.colors.ember};
    color: ${(p) => p.theme.colors.emberBright};
  }
`;

interface Props {
  query: string;
  onQueryChange: (q: string) => void;
  genres: Genre[];
  activeGenre: Genre | null;
  onGenreChange: (g: Genre | null) => void;
}

export function SearchAndFilter({
  query,
  onQueryChange,
  genres,
  activeGenre,
  onGenreChange,
}: Props) {
  return (
    <Wrap>
      <SearchInput
        type="text"
        placeholder="Search mods by name, tag or description..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <Genres>
        <GenreChip
          $active={activeGenre === null}
          onClick={() => onGenreChange(null)}
        >
          All
        </GenreChip>
        {genres.map((g) => (
          <GenreChip
            key={g}
            $active={activeGenre === g}
            onClick={() => onGenreChange(activeGenre === g ? null : g)}
          >
            {g}
          </GenreChip>
        ))}
      </Genres>
    </Wrap>
  );
}
