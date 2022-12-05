/*import ClassComponent from "./ClassComponent"
import Component2 from "./Component2"

function App(){
  return(
    <section>
      <img src="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png" alt="react"/>
      <h1>Good Morning</h1>
      <p>Hello Everyone</p>
      <ClassComponent/>
      <Component2/>    
    </section>
  )
}

export default App;*/

//import PropsExample from './PropsExample'
//import Events from './Events'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import NotFound from "./Components/NotFound"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      {/*<h1>This is about Props</h1>
      <PropsExample name="janu" age="20"/>
      <Events/>*/}
    </div>
  )
}
export default App