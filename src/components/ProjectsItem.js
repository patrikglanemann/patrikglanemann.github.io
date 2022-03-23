import "./Projects.css";

export default function ProjectsItem({
  title,
  description,
  tech,
  gitHub,
  liveDemo,
  image,
}) {
  return (
    <div className="Project">
      <div>
        {liveDemo ? (
          <a href={liveDemo}>
            <img className="Project__image" src={image} alt="Project"></img>
          </a>
        ) : (
          <img className="Project__image" src={image} alt="Project"></img>
        )}
      </div>
      <div className="Project__info">
        <h3 className="Project__title">{title}</h3>
        <p>{description}</p>
        {tech ? (
          <ul className="Project__tech">
            {tech.map((item, index) => {
              return <li key={index}>{item} / </li>;
            })}
          </ul>
        ) : (
          ""
        )}
        <div className="Project__links">
          <a href={gitHub}>GitHub</a>
          {liveDemo ? <a href={liveDemo}>Live Demo</a> : ""}
        </div>
      </div>
    </div>
  );
}
