import './Projects.css';
import { webApps } from '../data/webApps';
import ProjectsItem from './ProjectsItem';

export default function Projects() {
  function renderWebApps() {
    const webAppsList = webApps.map((webApp) => {
      return (
        <ProjectsItem
          key={webApp.id}
          title={webApp.title}
          description={webApp.description}
          tech={webApp.tech}
          gitHub={webApp.gitHub}
          liveDemo={webApp.liveDemo}
          image={webApp.image}
        />
      );
    });
    return webAppsList;
  }

  return (
    <section className='Projects'>
      <h2 className='Projects__title'>Projects</h2>
      <article>
        <h2 className='Projects__subTitle'>Web Apps</h2>
        <div className='Projects__webApps'>{renderWebApps()}</div>
      </article>
      <h2>Landingpages</h2>
      <h2>Java Android Projects</h2>
    </section>
  );
}
