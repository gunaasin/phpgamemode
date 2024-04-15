import {Link} from "react-router-dom";


export const Navbar = () => {
  
  return (
    <div className="nav-component">
 <div className="logoimg"><img src="codelogo.png" alt="" /></div>
 <h3 className="nav-Link"> <Link to={"/Component2"}>Namespaces</Link></h3>
     <h3 className="nav-Link"> <Link to={"/"}>Variable Scope</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component3"}>Data Interaction</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component4"}> Closures</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component5"}> Dependency Management and Autoloading</Link></h3>
     {/* <h3 className="nav-Link"> <Link to={"/Component6"}> Concurrency and Asynchronous Programming</Link></h3> */}
     <h3 className="nav-Link"> <Link to={"/Component7"}> Event Handling</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component8"}> Error Handling</Link></h3>
     {/* <h3 className="nav-Link"> <Link to={"/Component9"}> Error Handling</Link></h3> */}
     <h3 className="nav-Link"> <Link to={"/Component10"}> Performance Optimization</Link></h3>
  
    </div>
  )
}
