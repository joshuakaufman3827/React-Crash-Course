import { Link } from 'react-router-dom';
function nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/ronaldo">Ronaldo</Link>
        <Link to="/users/messi">Messi</Link>
        <Link to="/users/nrb4gg">David Bragg</Link>
    </nav>
  )
}

export default nav;