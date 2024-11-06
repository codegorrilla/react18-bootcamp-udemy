import { useParams } from 'react-router-dom';
export default function RecipePage() {
  const { id } = useParams();
  //console.log(params);

  return (
    <div>
      <h1>Poke Bowl</h1>
    </div>
  );
}
