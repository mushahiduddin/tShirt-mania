import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NoRoute from './Components/NoRoute/NoRoute';
import Orders from './Components/Orders/Orders';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/home',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>,
        },
        {
          path: '/orders',
          element: <Orders></Orders>,
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*', 
      element: <NoRoute></NoRoute>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
