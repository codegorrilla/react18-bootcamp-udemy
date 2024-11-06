import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    //Component element based navigation
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
}
