import { BrowserRouter } from 'react-router-dom';


import './App.css';
import UserRoutes from './UserRoutes';

import Navbar from 'modules/Navbar/Navbar';

function TheMovies() {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
   <Navbar />
 <UserRoutes />
    </BrowserRouter>
  );
}

export default TheMovies;

