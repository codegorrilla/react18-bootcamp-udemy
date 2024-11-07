import { useParams } from 'react-router-dom';
import { persons } from '../components/CardItem';

export default function DetailsPage() {
  const { id } = useParams();

  console.log(typeof id);

  const person = persons.find(p => p.id === parseInt(id));
  
  return (
    <>
      <h1>{person.name}</h1>
    </>
  );
}
