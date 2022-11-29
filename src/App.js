import { Routes, Route } from "react-router-dom";
/*import Navbar from "./Components.js/Navbar";
import Women from "./Components.js/Women";
import Men from "./Components.js/Men";
import Header from "./Components.js/Header";
import AboutUs from "./Components.js/AboutUs";
import ContactUs from "./Components.js/ContactUs";
import Login from "./Components.js/Login";
import Signin from "./Components.js/Signin";
import AdminPage from "./Components.js/AdminPage";
import Home from "./Components.js/Home";
import Kids from "./Components.js/Kids";
//import Cards from "./Components.js/Cards";
import Products from "./Components.js/Products";
import Carousel from "./Components.js/Carousel";
import CreateYourOwn from "./Components.js/CreateYourOwn";
//import File1 from "./Components.js/File1";
//import File2 from "./Components.js/File2";
//import Student from "./Components.js/Students";*/

import Grids from "./MidLab.s/Grid";
import T20worldcup from "./MidLab.s/T20worldcup";




function App() {
  return (
  
    <div>
<Grids/>
<Routes>
<Route path="/Qeatrophy" element={<qeatrophy/>}/>
<Route path="/iosapps" element={<iosapps/>}/>
</Routes>


{/* <Header/>
   <Navbar/>
 {/*<File1/>
 <File2/>
  
    <Routes>
    
   <Route path="/" element={<Carousel/>}/>
       <Route path="/" element={<Home/>} />
        <Route path="/CreateYourOwn" element={<CreateYourOwn/>}/>
        <Route path="/Kids" element={<Kids/>}/>
         <Route path="/Women" element={<Women/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
       <Route path="/AdminPage" element={<AdminPage/>}/>
   
   
     
    
     </Routes>
    */  } 
   </div>
    
   
  );
}

export default App;