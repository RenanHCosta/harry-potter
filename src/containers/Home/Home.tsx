import { useEffect } from 'react';
import apiService from "services/api-service";
import Introduction from 'components/presentation/Introduction';
import './Home.style.scss'

function Home() {

  const init = async () => {
    const {
      data,
    } = await apiService.characters.findAll();

    const {
      data: specific,
    } = await apiService.characters.findOne("4c7e6819-a91a-45b2-a454-f931e4a7cce3");

    console.log(data);
    console.log(specific);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <main>
      <Introduction />
    </main>
  )
}

export default Home
