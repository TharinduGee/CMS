import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import NavBar from './components/navBar';
import Cargoes from './pages/cargoes';
import AddCargo from './pages/addCargo';
import EditCargo from './pages/editCargo';
import DeleteCargo from './pages/deleteCargo';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes >
          <Route path="/" element={<Cargoes/>} />
          <Route path="/add" element={<AddCargo/>} />
          <Route path="/edit/:id" element={<EditCargo/>} />
          <Route path="/delete/:id" element={<DeleteCargo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

