
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Category from "./Pages/Category";
const App = () => {

   return (

      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />} >
                  <Route index element={<Home/>}/>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/category" element={<Category />} />

               </Route>
            </Routes>

         </BrowserRouter>
       



      </>
   )

}
export default App;
