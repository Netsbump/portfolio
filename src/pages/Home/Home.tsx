import { Outlet } from 'react-router-dom';
import { MenuNavigation } from '../../components/MenuNavigation/MenuNavigation';

const Home: React.FC = () => {
  return (
    <div>
      <MenuNavigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export { Home };
