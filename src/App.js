import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Rootlayout from './Layouts/Rootlayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contacts';
import './App.scss';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Rootlayout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Route>
    )
  )
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
