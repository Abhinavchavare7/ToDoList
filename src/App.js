import './App.css';
import  "./StyleSheet/GlobleStyle.css"
import HeaderCont from './Header/HeaderCont';
import Footer from "./Footer/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import SingleList from './Components/SingleList/SingleList';
import Totallist from './Components/ToDoList/Totallist';
import QuillEditor from './Components/QuillEditor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className='app-container'>
<Router>
<HeaderCont/>
<Routes>
     <Route path="/" element={<Home/>}></Route>
     </Routes>
<Routes>
     <Route path="/single" element={<SingleList/>}></Route>
     </Routes>
<Routes>
     <Route path="/totallist" element={<Totallist/>}></Route>
     </Routes>
     
     <Footer/>
     </Router>
   
    </div>
  );
}

export default App;
