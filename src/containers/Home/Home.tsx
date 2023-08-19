import Introduction from 'components/presentation/Introduction';
import Showcase from 'components/presentation/Showcase';

import { CharactersProvider } from 'contexts/characters.context';

import './Home.style.scss'

function Home() {
  return (
    <CharactersProvider>
      <main>
        <Introduction />
        <Showcase />
      </main>
    </CharactersProvider>
  )
}

export default Home
