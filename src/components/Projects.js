import './Projects.css';
import { webApps } from '../data/webApps';
import { javaAndroid } from '../data/javaAndroid';
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
  function renderJavaAndroid() {
    const javaAndroidList = javaAndroid.map((javaAndroidProject) => {
      return (
        <ProjectsItem
          key={javaAndroidProject.id}
          title={javaAndroidProject.title}
          description={javaAndroidProject.description}
          gitHub={javaAndroidProject.gitHub}
          image={javaAndroidProject.image}
        />
      );
    });
    return javaAndroidList;
  }

  return (
    <section id='projects' className='Projects'>
      <h2 className='Projects__title'>Projects</h2>
      <article>
        <h2 className='Projects__subTitle'>Web Apps</h2>
        <div className='Projects__container'>{renderWebApps()}</div>
      </article>
      <article>
        <h2 className='Projects__subTitle'>Java Android Projects</h2>
        <div className='Projects__container'>{renderJavaAndroid()}</div>
      </article>
    </section>
  );
}
