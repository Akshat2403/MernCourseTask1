import './App.css';
import Crud from './components';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Update from './components/Update';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <ToastContainer
        theme="dark"
      />
      <div className="App">
        <h1 className='heading'>Crud With JSON Server</h1>
        <Routes>
          <Route exact path="/" element={<Crud/>}/>
          <Route exact path={`/update/:id`} element={<Update/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
