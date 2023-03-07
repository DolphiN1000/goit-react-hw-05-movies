import { BrowserRouter } from 'react-router-dom';

import './App.css';
import UserRoutes from './UserRoutes';

function TheMovies() {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
   {/* <Navbar /> */}
 <UserRoutes />
    </BrowserRouter>
  );
}

export default TheMovies;

