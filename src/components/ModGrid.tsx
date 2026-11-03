import styled from "styled-components";
import type { Mod } from "../data/mods";
import { ModCard } from "./ModCard";

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;

const Empty = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px 100px;
  text-align: center;
  color: ${(p) => p.theme.colors.muted};
  font-style: italic;
`;

export function ModGrid({ mods }: { mods: Mod[] }) {
  if (mods.length === 0) {
    return <Empty>No mods match the mists of your search. Try another term.</Empty>;
  }

  return (
    <Grid>
      {mods.map((mod) => (
        <ModCard key={mod.id} mod={mod} />
      ))}
    </Grid>
  );
}
