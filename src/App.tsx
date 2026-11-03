import { useMemo, useState } from "react";
import { Header } from "./components/Header";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { ModGrid } from "./components/ModGrid";
import { Footer } from "./components/Footer";
import { mods, allGenres, type Genre } from "./data/mods";

function App() {
  const [query, setQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState<Genre | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mods.filter((mod) => {
      const matchesGenre = activeGenre ? mod.genres.includes(activeGenre) : true;
      const matchesQuery =
        q.length === 0 ||
        mod.name.toLowerCase().includes(q) ||
        mod.tagline.toLowerCase().includes(q) ||
        mod.description.toLowerCase().includes(q) ||
        mod.genres.some((g) => g.toLowerCase().includes(q));
      return matchesGenre && matchesQuery;
    });
  }, [query, activeGenre]);

  return (
    <>
      <Header />
      <SearchAndFilter
        query={query}
        onQueryChange={setQuery}
        genres={allGenres}
        activeGenre={activeGenre}
        onGenreChange={setActiveGenre}
      />
      <ModGrid mods={filtered} />
      <Footer />
    </>
  );
}

export default App;
