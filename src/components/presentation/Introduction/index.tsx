import Logo from 'assets/images/svg/logo.svg';
import Waves from 'components/ui/Waves';

import './Introduction.style.scss';

function Introduction() {
  return (
    <section className="introduction">
      <Waves />
      <img className="logo" alt="Harry Potter Logo" src={Logo} width={200} height={200} />
    </section>
  )
}

export default Introduction;