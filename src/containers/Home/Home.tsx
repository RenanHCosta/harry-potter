import Logo from 'assets/images/svg/logo.svg';
import './Home.style.scss'

function Home() {
  return (
    <>
      <img src={Logo} width={200} height={200} />
      <h1>Harry Potter</h1>
    </>
  )
}

export default Home
