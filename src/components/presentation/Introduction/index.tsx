import Logo from 'assets/images/svg/logo.svg';
import Waves from 'components/ui/Waves';

import { useCharacters } from '@/hooks/use-characters';

import './Introduction.style.scss';

function Introduction() {
  const { list, loading } = useCharacters();

  console.log(list, 'list');
  console.log(loading, 'loading');

  return (
    <section className="introduction">
      <Waves />
      <img className="logo" alt="Harry Potter Logo" src={Logo} width={200} height={200} />
    </section>
  )
}

export default Introduction;