import { createBrowserRouter } from 'react-router-dom';
import { Start } from '../pages/Start/Start';
import { Home } from '../pages/Home/Home';
import { AboutMe } from '../pages/AboutMe/AboutMe';
import { Projects } from '../pages/Projects/Projects';
import { Settings } from '../pages/Settings/Settings';
import { Skills } from '../pages/Skills/Skills';
import { Graduates } from '../pages/Graduates/Graduates';
import { Links } from '../pages/Links/Links';

const router = createBrowserRouter([
  {
    path: '/start',
    element: <Start />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'graduates',
        element: <Graduates />,
      },
      {
        path: 'links',
        element: <Links />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export { router };
