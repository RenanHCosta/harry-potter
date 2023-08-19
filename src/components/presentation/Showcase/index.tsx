import CharacterCard from "components/ui/CharacterCard";
import Button from "components/ui/Button";
import { useCharacters } from "hooks/use-characters";

import './Showcase.style.scss';

function Showcase() {
  const { displayedCharacters, loading, nextPage, prevPage } = useCharacters();

  return (
    <section className="container showcase">
      <div className="showcase__grid">
        {!loading
          ? displayedCharacters.map((character) => <CharacterCard key={character.id} {...character} />)
          : <span>Loading...</span>}
      </div>
      <div className="showcase__pagination">
        <Button label="Anterior" onClick={prevPage} />
        <Button label="Próximo" onClick={nextPage} />
      </div>
    </section>
  );
}

export default Showcase;
