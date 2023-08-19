import CharacterCard from "components/ui/CharacterCard";
import { useCharacters } from "hooks/use-characters";

import './Showcase.style.scss';

function Showcase() {
  const { list, loading } = useCharacters();

  console.log(list)
  return (
    <section className="container showcase">
      {!loading
        ? list.map((character) => <CharacterCard key={character.id} {...character} />)
        : <span>Loading...</span>}
    </section>
  );
}

export default Showcase;
