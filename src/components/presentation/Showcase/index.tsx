import { useRef } from "react";
import { useCharacters } from "@/hooks";

import Filters from "components/presentation/Filters";
import CharacterCard from "components/ui/CharacterCard";
import Button from "components/ui/Button";

import "./Showcase.style.scss";

function Showcase() {
  const {
    pageCharacters,
    currentPage,
    totalPages,
    loading,
    nextPage,
    prevPage,
  } = useCharacters();
  const ref = useRef<HTMLElement>(null);
  const notFound = pageCharacters.length === 0 && !loading;

  const handleScroll = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleNext = () => {
    nextPage();
    handleScroll();
  };

  const handlePrev = () => {
    prevPage();
    handleScroll();
  };

  return (
    <section ref={ref} className="container showcase">
      <Filters />
      {notFound
        ? <p className="no-results">Nenhum resultado encontrado.</p>
        : (
          <div className="showcase__grid">
            {!loading
              ? pageCharacters.map((character) => (
                <CharacterCard key={character.id} {...character} />
              ))
              : <span>Loading...</span>}
          </div>
        )}
      <div className="showcase__pagination">
        <Button
          disabled={currentPage === 1 || notFound}
          label="Anterior"
          onClick={handlePrev}
        />
        <Button
          disabled={currentPage === totalPages || notFound}
          label="Próximo"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}

export default Showcase;
