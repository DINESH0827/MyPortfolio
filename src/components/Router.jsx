import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Hero from './Hero';
import Project from './Project';
import Resume from './Resume';
import Email from './Email';
import App from '../App';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { 
        path: '/', element: <Header />
       },{ 
        path: '/hero', element: <Hero />
       },
      {
         path: '/about', element: <About /> 
        },

      { 
        path: '/project', element: <Project /> 
      },
      
      { 
        path: '/resume', element: <Resume /> 
      },
      { 
        path: '/email', element: <Email /> 
      },
    ]

  },

]);

const Router = () => <RouterProvider router={router} />

export default Router;
