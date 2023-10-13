import './styles/App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoutes';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export { App };
