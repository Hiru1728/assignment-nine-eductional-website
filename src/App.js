import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Resources from './components/Resources/Resources';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/resources',
          element: <Resources></Resources>
        },
        {
          path: '/quize/:quizeId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`),
          element: < QuizDetails ></QuizDetails >
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
