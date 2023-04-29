
import "./css/style.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/StaffLogin";
import Footer from "./components/Footer";
import PatientLogin from "./components/PatientLogin";
import StaffLogin from "./components/StaffLogin";
export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
<Route path='/login' element={<PatientLogin/> } />
<Route path='/staffLogin' element={<StaffLogin/> } />
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   
   </>
  );
}
