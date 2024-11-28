import Card from './Card';

// export const recipes = [
//   {
//     id: 1,
//     name: 'Poke Bowl',
//     image:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.momsdish.com%2Fwp-content%2Fuploads%2F2020%2F08%2FHawaiin-Poke-Bowl-014-2048x3072.jpg&f=1&nofb=1&ipt=3a1862c5d9ec1a7e3b94b86a7c1b39c713918d6e9d94d1cf206b9201f2e3be8e&ipo=images',
//     tag: 'Romantic Dinner',
//     numberOfMinutes: 60,
//   },
//   {
//     id: 2,
//     name: 'Chocolate Banana Cake',
//     image:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NK6IMbK7B3dSEzgKzL4NrAAAAA%26pid%3DApi&f=1&ipt=9e63226450c7c8a691e217f9660a652e26bd5029a900501445013b8f132a75e0&ipo=images',
//     tag: 'Sweet Tooth',
//     numberOfMinutes: 50,
//   },
//   {
//     id: 3,
//     name: 'Chicken Satay',
//     image:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.n4ADdYkYSX5LhAKTopputQHaLH%26pid%3DApi&f=1&ipt=42fd727d8cff4ca1d0077cca7cf190a22c839e4676732d88a077cfffbb173f8f&ipo=images',
//     tag: 'Chicken',
//     numberOfMinutes: 30,
//   },
//   {
//     id: 4,
//     name: 'Kanafeh',
//     image:
//       'https://i.pinimg.com/originals/1c/49/f1/1c49f13151a7b25cb1fd8bab1ddb105d.jpg',
//     tag: 'Romantic Dinner',
//     numberOfMinutes: 30,
//   },
// ];

export default function CardList({recipes}) {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
