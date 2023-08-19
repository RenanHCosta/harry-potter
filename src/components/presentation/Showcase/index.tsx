import { useRef } from "react";
import CharacterCard from "components/ui/CharacterCard";
import Button from "components/ui/Button";
import { useCharacters } from "hooks/use-characters";

import './Showcase.style.scss';

function Showcase() {
  const { displayedCharacters, currentPage, loading, nextPage, prevPage } = useCharacters();
  const ref = useRef<HTMLElement>(null);

  const handleScroll = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleNext = () => {
    nextPage();
    handleScroll();
  }

  const handlePrev = () => {
    prevPage();
    handleScroll();
  }

  return (
    <section ref={ref} className="container showcase">
      <div className="showcase__grid">
        {!loading
          ? displayedCharacters.map((character) => <CharacterCard key={character.id} {...character} />)
          : <span>Loading...</span>}
      </div>
      <div className="showcase__pagination">
        <Button disabled={currentPage === 1} label="Anterior" onClick={handlePrev} />
        <Button label="Próximo" onClick={handleNext} />
      </div>
    </section>
  );
}

export default Showcase;
