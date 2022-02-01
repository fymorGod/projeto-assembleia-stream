import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Admin } from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/system' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
