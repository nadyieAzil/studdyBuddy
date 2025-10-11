import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#welcome" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
