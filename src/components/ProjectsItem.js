export default function ProjectsItem({
  title,
  description,
  tech,
  gitHub,
  liveDemo,
  image,
}) {
  return (
    <>
      <div>
        <a href={liveDemo}>
          <img src={image} alt='IMAGE'></img>
        </a>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{tech}</p>
        <a>{gitHub}</a>
        <a>{liveDemo}</a>
      </div>
    </>
  );
}
