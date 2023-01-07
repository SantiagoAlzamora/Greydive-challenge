import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Encuesta from './components/Encuesta'
import Respuestas from './components/Respuestas';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Encuesta />
    },
    {
      path: "/respuestas",
      element: <Respuestas />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
