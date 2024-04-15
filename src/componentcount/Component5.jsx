import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component5 = () => {
  const codesnip = {
    php: `<?php    
    // File: src/Calculator.php
    namespace MyNamespace;
    
    class Calculator {
        public function add($a, $b) {
            return $a + $b;
        }
    
        public function subtract($a, $b) {
            return $a - $b;
        }
    }
    
// Include Composer's autoloader
require_once __DIR__ . '/vendor/autoload.php';

// Use the Calculator class
use MyNamespace\Calculator;

// Create a new Calculator instance
$calculator = new Calculator();

// Perform some calculations
echo "3 + 5 = " . $calculator->add(3, 5) . "<br>";
echo "7 - 2 = " . $calculator->subtract(7, 2) . "<br>";
    
    
    `}
    const answer = {
      php: `\n
      <?php
      // File: src/Calculator.php
      namespace MyNamespace;
      
      class Calculator {
          public function add($a, $b) {
              return $a + $b;
          }
      
          public function subtract($a, $b) {
              return $a - $b;
          }
      }
      
     

// Include Composer's autoloader
require_once __DIR__ . '/vendor/autoload.php';

// Use the Calculator class
use MyNamespace\Calculator;

// Create a new Calculator instance
$calculator = new Calculator();

// Perform some calculations
echo "3 + 5 = " . $calculator->add(3, 5) . "<br>";
echo "7 - 2 = " . $calculator->subtract(7, 2) . "<br>";

      `}
  return (
    <>
    <Maincom  title={" Dependency Management and Autoloading"}
    game={"https://ifelse-indol.vercel.app/"}
    url={'https://videoconsole-lac.vercel.app/'}
      steps={['Dependency management in PHP involves handling external libraries or packages that your project relies on. Instead of manually downloading, including, and managing these dependencies, you can use a dependency manager like Composer.',
       
      ]}
      codesnip={codesnip}
      answer={answer}
      />
    </>
  )
}

