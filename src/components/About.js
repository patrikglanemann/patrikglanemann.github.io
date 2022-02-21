import './About.css';

export default function About() {
  return (
    <section className='About'>
      <div>
        <h1 className='About__title'>Hi, I am Patrik.</h1>
        <h2>A Junior Web Developer from Hamburg, Germany.</h2>
        <p>
          Besides web development I am interested in mobile App development,
          mainly in Java for Android.
        </p>
        <p>
          In my free time I am an Artist, drawing and painting (oil or acrylic).
          <br />I also did a little 3D modelling and created a very basic game
          in Unity.
        </p>
      </div>
      <div className='About__icons'>
        <a href='https://github.com/patrikglanemann'>
          <img
            className='icon'
            src='https://www.vectorlogo.zone/logos/github/github-tile.svg'
            alt='GitHub'
          />
        </a>
        <a href='https://www.xing.com/profile/Patrik_Glanemann/cv'>
          <img
            className='icon'
            src='https://www.vectorlogo.zone/logos/xing/xing-tile.svg'
            alt='Xing'
          />
        </a>
        <a href='https://instagram.com/johnzerorezt'>
          <img
            className='icon'
            src='https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg'
            alt='Instagram'
          />
        </a>
      </div>
    </section>
  );
}
