import CardList from '../components/CardList';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
  },
  headers: {
    'x-rapidapi-key': 'd666749ac3mshb244efd8aec2605p10b5fajsnf83843d6628e',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};


export default function HomePage() {

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    fetchRecipes();
  }, [])

  const fetchRecipes = async()=>{
    try {
      const response = await axios.request(options);

      console.log(response.data)
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Header />
      <CardList recipes={recipes}/>
    </>
  );
}
