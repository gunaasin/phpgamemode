import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component4 = () => {
  const codesnip = {
    php: `<?php
    // Define a closure
    $greeting = function($name) {
        return "Hello, $!";
    };
    
    // Call the closure
    echo $greeting("John"); // Outputs: Hello, John!
    
    // Array of numbers [1, 2, 3, 4, 5]
    
    
    // Use closure with array_map to square each number
    $squared = array_map(function($num) {
        // return $num * $num;
      
    }, $numbers);
    
    print_r($squared); // Outputs: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )
    
    // Define a variable in the parent scope
    $message = "Hello, ";
    
    // Define a closure that uses the variable from the parent scope
    $greeting = function($name) use ($message) {
        return $message . $name;
    };
    
    // Call the closure
    echo $greeting("Jane"); // Outputs: Hello, Jane
    
    `}
    const answer ={
      php:`<?php
      // Define a closure
      $greeting = function($name) {
          return "Hello, $name!";
      };
      
      // Call the closure
      echo $greeting("John"); // Outputs: Hello, John!
      
      // Array of numbers [1, 2, 3, 4, 5]

      $numbers = [1, 2, 3, 4, 5];
      
      // Use closure with array_map to square each number
      $squared = array_map(function($num) {
        // return $num * $num;
          return $num * $num;
      }, $numbers);
      
      print_r($squared); // Outputs: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )
      
      // Define a variable in the parent scope
      $message = "Hello, ";
      
      // Define a closure that uses the variable from the parent scope
      $greeting = function($name) use ($message) {
          return $message . $name;
      };
      
      // Call the closure
      echo $greeting("Jane"); // Outputs: Hello, Jane
      
    `}
    
  return (
    <>

    <Maincom  title={"Closures"}
    answer={answer}
    game={"https://gunaasin.github.io/closurvillgame/"}
    
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/7990d5b71d19eccdf0/2ecca0bbe6c47763'}
       steps={['Closures in PHP allow you to create anonymous functions that can access variables from the parent scope. They are often used in situations where you need to pass a callback function to another function, such as array functions (array_map, array_filter), or for creating more flexible and reusable code.',
       'Step 1: Define a closure using the function keyword and assign it to a variable $greeting. The closure takes a parameter $name and returns a greeting message. We then invoke the closure by passing a value "John" to it.',
       'Step 2: Closures are often used as callback functions, especially with array functions like array_map and array_filter.the closure function($num) { return $num * $num; } is used as a callback function to array_map. It squares each number in the array.',
       'Step 3: Closures can access variables from the parent scope using the use keyword.',
       'Step 4: The closure accesses the variable $message from the parent scope using use ($message). This allows the closure to use variables that are not passed as arguments.',     
       ]}
       codesnip={codesnip}
       />
    
    </>
  )
}
