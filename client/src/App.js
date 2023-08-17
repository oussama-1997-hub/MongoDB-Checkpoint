import './App.css';
import {Routes,Route,Link} from "react-router-dom"
    import ContactList from "./components/ContactList"
import { Button } from "reactstrap";
import AddContact from './components/AddContact';
function App() {
  return (
    <div className="App">
<Link to="/list">
<Button color="info">Contact list</Button>
</Link>
<Link to="/add">
<Button color="info">Add Contact</Button>
</Link>
<Routes>
  <Route path="/list" element={<ContactList />} />
  <Route path="/add" element={<AddContact />} />

</Routes>

    </div>
  );
}

export default App;
