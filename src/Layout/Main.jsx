import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navber from "../Shared/Navber"


const Main = () => {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      
    </div>
  )
}

export default Main
