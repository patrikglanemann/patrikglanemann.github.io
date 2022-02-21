import './Projects.css';

export default function ProjectsItem({
  title,
  description,
  tech,
  gitHub,
  liveDemo,
  image,
}) {
  return (
    <div className='Project'>
      <div>
        <a href={liveDemo}>
          <img className='Project__image' src={image} alt='IMAGE'></img>
        </a>
      </div>
      <div className='Project__info'>
        <h3 className='Project__title'>{title}</h3>
        <p>{description}</p>
        <ul className='Project__tech'>
          {tech.map((item) => {
            return <li>{item} / </li>;
          })}
        </ul>
        <div className='Project__links'>
          <a href={gitHub}>GitHub</a>
          <a href={liveDemo}>Live Demo</a>
        </div>
      </div>
    </div>
  );
}
