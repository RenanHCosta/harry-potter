import Introduction from 'components/presentation/Introduction';

import { CharactersProvider } from '@/contexts/characters.context';

import './Home.style.scss'

function Home() {
  return (
    <CharactersProvider>
      <main>
        <Introduction />
      </main>
    </CharactersProvider>
  )
}

export default Home
