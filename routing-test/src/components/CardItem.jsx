import Card from "./Card";

export const persons = [
  {
    id: 1,
    name: 'Brad',
    job: 'designer',
    location: 'Kolkata'
  },
  {
    id: 2,
    name: 'Sanjib',
    job: 'developer',
    location: 'Kolkata'
  },
  {
    id: 3,
    name: 'Salim',
    job: 'Developer',
    location: 'Delhi'
  },
  {
    id: 4,
    name: 'Samuel',
    job: 'database',
    location: 'Jamaica'
  },
]

export default function CardItem() {
  
  return (
    <section className="card-stack">
      {persons.map(person =>(
        <Card key={person.id} person = {person} />
      ))}
    </section>
  );
}
