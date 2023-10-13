import { Link } from 'react-router-dom';

/**
 * Navigation menu
 * @returns MenuNavigation components.
 */
const MenuNavigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="about-me">About Me</Link>
        </li>

        <li>
          <Link to="projects">Projects</Link>
        </li>

        <li>
          <Link to="skills">Skills</Link>
        </li>

        <li>
          <Link to="graduates">Graduates</Link>
        </li>

        <li>
          <Link to="links">Links</Link>
        </li>
      </ul>
    </nav>
  );
};

export { MenuNavigation };
