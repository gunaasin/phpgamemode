import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'

export const Component2 = () => {
  const [runCodeData] = useState(null);
const codesnip = {
php: `<?php

// Define a namespace called MyNamespace


// Define a class inside the namespace
class MyClass {
    // Define a method inside the class to greet
    public function greet() {
        // Output a greeting message  "Hello from MyClass!"
        ;
    }
}

// Define a function inside the namespace
function myFunction() {
    // Output a greeting message
     "Hello from myFunction!";
}

// Define a constant inside the namespace
const MY_CONSTANT = "This is a constant";

// Access the strlen function outside the namespace
$length = strlen("Hello");

// Create an instance of MyClass
$obj = new MyClass();
// Call the greet method of MyClass
$obj->greet(); 

// Call the myFunction function
myFunction();

// Output the value of the constant
echo MY_CONSTANT;

// Output the length of the string "Hello"
echo $length;

?>

    

`}

    const answer = {
      php: `
<?php
      
// Define a namespace called MyNamespace
namespace MyNamespace;
          
// Define a class inside the namespace
class MyClass {
// Define a method inside the class to greet
public function greet() {
                 // Output a greeting message  "Hello from MyClass!"
                  echo "Hello from MyClass!";
              }
}
          
// Define a function inside the namespace
function myFunction() {
              // Output a greeting message
              echo "Hello from myFunction!";
}
          
// Define a constant inside the namespace
const MY_CONSTANT = "This is a constant";
          
// Access the strlen function outside the namespace
$length = strlen("Hello");
          
// Create an instance of MyClass
$obj = new MyClass();
// Call the greet method of MyClass
$obj->greet(); 
          
// Call the myFunction function
myFunction();
          
// Output the value of the constant
echo MY_CONSTANT;
          
// Output the length of the string "Hello"
echo $length;
          
?>
      
      `}
  return (
    <>
      <Maincom title={"Namespaces"}

       game={' https://gunaasin.github.io/namespace/ '}
       
       url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/1190d5b71d19edc498/e1979ec0395c47e6'}
       
        steps={['In PHP, a namespace is a way to organize code by grouping related classes, interfaces, functions, and constants under a specific name. This helps in preventing naming conflicts between different parts of your codebase, especially when youre working with third-party libraries or when your project grows larger.',
                'Step 1: Define a namespace MyNamespace',
                'Step 2: Define a class within the namespace',
                'Step 3: Define a function within the namespace',
                'Step 4: Define a constant within the namespace',
                'Step 5: You can also use namespace keyword to access items outside of the namespace',
                'Step 6: For example, accessing PHP built-in function strlen',
        ]}
         answer={answer}
         codesnip={codesnip}

      />

    </>
  )
}

export const ChildComponent = ({ runCodeData}) => {
  
  return (
    
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
    </div>
    
  )
}
