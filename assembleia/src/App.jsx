import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Admin } from "./pages/admin";
import { Register } from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/system' element={<Admin />} />
        <Route path='/admin/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
