import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'


export const Component1 = () => {
  const [runCodeData] = useState(null);


  const codesnip = {
    php: `
<?php
$globalVar = "I'm a global variable";

function testFunction1() {
    // Accessing global variable inside function
    echo $GLOBALS['']; // Outputs: I'm a global variable
}

testFunction1();


function testFunction2() {
    // assign the value in var I'm a function variable
    $functionVar = "";
    echo $functionVar;
}

testFunction2(); // Outputs: I'm a function variable

// Trying to access $functionVar outside the function will result in an error
// echo $functionVar; // This will throw an "Undefined variable" error

function incrementCounter() {
    static $counter = 0;
    $counter++;
    echo $counter . "";
}

incrementCounter(); // Outputs: 1
incrementCounter(); // Outputs: 2
incrementCounter(); // Outputs: 3
?>


    
  `}
  const answer = {
    php: `\n<?php
    $globalVar = "I'm a global variable";

    function testFunction1() {
        // Accessing global variable inside function
        echo $GLOBALS['globalVar']; // Outputs: I'm a global variable
    }
    
    testFunction1();

   
    function testFunction2() {
      // assign the value in var I'm a function variable
        $functionVar = "I'm a function variable";
        echo $functionVar;
    }
    
    testFunction2(); // Outputs: I'm a function variable
    
    // Trying to access $functionVar outside the function will result in an error
    // echo $functionVar; // This will throw an "Undefined variable" error
   
    function incrementCounter() {
        static $counter = 0;
        $counter++;
        echo $counter . " ";
    }
    
    incrementCounter(); // Outputs: 1
    incrementCounter(); // Outputs: 2
    incrementCounter(); // Outputs: 3
    
    ?>

    `
  }

  return (
    <>

      <Maincom

        game={'https://gunaasin.github.io/scope-coincatch/'}
        
        url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/ea90d5b71d19edcb63/88f4b2687e9b40f9'}


        steps={[
          'Variable scope in PHP refers to the visibility and accessibility of variables within different parts of a PHP script. PHP supports several scopes, including global scope, function scope, and class scope. Understanding variable scope is essential for writing organized and bug-free PHP code.',
          'Global Scope: Variables declared outside of any function or class have global scope. They can be accessed from anywhere within the script, including inside functions and classes.',
          'Step 1: Accessing global variable inside function echo $GLOBALS["globalVar"]; // Outputs: Im a global variable',
          'Class Scope: Variables declared inside a class have class scope and are referred to as properties. They can be accessed using object instances or statically if declared as static.',
          'Step 2: Assign a variable --> Im a function variable',
          'Create a  "globalVariable" and value is "Goldcoin"',
          
         
          'create a varible "localVariable " inside function and value is "CoinWithstone"',
          'Step 3: Trying to access $functionVar outside the function will result in an error',
          'Static Variables in Functions: PHP also supports static variables inside functions. Static variables retain their values between function calls but are still limited to the functions scope.',
        ]}
        title={"Variable Scope"}
        answer={answer}
        codesnip={codesnip}

      />

    </>
  )
}


export const ChildComponent = ({ runCodeData }) => {
 
  return (
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}

    </div>
  )
}


