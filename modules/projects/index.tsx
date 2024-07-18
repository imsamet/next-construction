import cn from 'classnames';
import styles from './styles.module.scss';
import ProjectCard from '@/components/projectCard';
import { projects } from '@/constants/projects';

const Projects: React.FC = () => {
  return (
    <section className={cn('section', styles.section)}>
      <div className="container">
        <div>
          <h3 className={styles.title}>Projeler</h3>
          <p className={cn('paragraph', styles.description)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis magna libero, non vulputate
            ex hendrerit vel. Nunc semper tempor aliquet. Cras fringilla, mauris et rutrum cursus, enim massa gravida
            felis, nec consectetur massa nisl in turpis.
          </p>
        </div>
        <div className="row">
          {projects.map((i, key) => (
            <div key={key} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <ProjectCard title={i.title} description={i.description} src={i.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
