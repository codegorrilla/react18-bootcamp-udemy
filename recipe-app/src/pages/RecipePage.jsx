import {useParams} from 'react-router-dom'
import { recipes } from '../components/CardList';

export default function RecipePage(){
    const {id} = useParams();
    //console.log(typeof id);

    const recipe = recipes.find(r => r.id === parseInt(id));

    //console.log(recipe)

    return(
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )
}