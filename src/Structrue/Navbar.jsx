import { Box , Text, Image } from "@chakra-ui/react";
import {Link} from "react-router-dom";



export const Navbar = () => {
  
  return (
    <Box h="100vh"
     w="18%"
     position={"sticky"}
     top="0.1px"
     >
      <a href="https://learncode-seven.vercel.app/"><Image w="180px" h="75px"src="codelogo.png" marginLeft={5} px={1}/></a>
       <Link to={"/"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} p={3} className="Nav-Link">Variable Scope</Text></Link>
       <Link to={"/Component2"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} className="Nav-Link" p={3}>Namespaces</Text></Link>
       <Link to={"/Component3"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} p={3} className="Nav-Link">Data Interaction</Text> </Link>
       <Link to={"/Component4"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} p={3} className="Nav-Link">Closures</Text></Link>
       <Link to={"/Component5"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} p={3} className="Nav-Link">Dependency Management and Autoloading</Text> </Link>
       <Link to={"/Component7"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} p={3} className="Nav-Link">Event Handling</Text> </Link>
       <Link to={"/Component8"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} p={3} className="Nav-Link">Error Handling</Text></Link>
       <Link to={"/Component10"}><Text fontSize='md' bg="#130D1E" mx={4} my={2} p={3} className="Nav-Link" >Performance Optimization</Text> </Link>
    </Box>
     
  )
}
