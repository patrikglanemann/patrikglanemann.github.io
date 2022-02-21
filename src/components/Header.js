import './Header.css';

export default function Header() {
  return (
    <header className='Header'>
      <h2 className='Header__quote'>"Strive for progress, not perfection."</h2>
      <nav className='Header__navBar'>
        <a href='#projects'>
          <h2>Projects</h2>
        </a>
      </nav>
    </header>
  );
}
