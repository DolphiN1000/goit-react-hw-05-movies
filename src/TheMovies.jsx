import { BrowserRouter } from 'react-router-dom';

import './App.css';
import UserRoutes from './UserRoutes';

function TheMovies() {
  return (
    <BrowserRouter>
   {/* <Navbar /> */}
 <UserRoutes />
    </BrowserRouter>
  );
}

export default TheMovies;

