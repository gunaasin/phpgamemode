import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component8 = () => {
  const codesnip = {
   php: `<?php
   // Custom error handler function
   function customErrorHandler($errno, $errstr, $errfile, $errline) {
    
   }
   
   // Set custom error handler
   set_error_handler("customErrorHandler");
   
   // Attempt to open a non-existent file (generates a warning)
   $file = fopen("non_existent_file.txt", "r");
   
   // Attempt to divide by zero (generates a warning)
   $result = 10 / ;
   
   // Attempt to access an undefined constant (generates a warning)
   echo UNDEFINED_CONSTANT;
   
   // Restore the default error handler
   restore_error_handler();
   ?>
   
    `}
    const answer = { 
      php :`<?php
      // Custom error handler function
      function customErrorHandler($errno, $errstr, $errfile, $errline) {
          echo "Error: [$errno] $errstr";
          echo "Error on line $errline in $errfile";
      }
      
      // Set custom error handler
      set_error_handler("customErrorHandler");
      
      // Attempt to open a non-existent file (generates a warning)
      $file = fopen("non_existent_file.txt", "r");
      
      // Attempt to divide by zero (generates a warning)
      $result = 10 / 0;
      
      // Attempt to access an undefined constant (generates a warning)
      echo UNDEFINED_CONSTANT;
      
      // Restore the default error handler
      restore_error_handler();
      ?>
      
      `}
      

  return (
    <>
    <Maincom  title={" Error Handling" }
           codesnip={codesnip}
           answer={answer}
           game={"https://gunaasin.github.io/errorhandling/"}
           url={'https://videoconsole-lac.vercel.app/'}
        steps={['Error handling in PHP involves managing errors and exceptions that occur during the execution of a PHP script. PHP provides several mechanisms for error handling, including error reporting, exception handling, and custom error handlers',
   
      ' PHP provides various error reporting levels that control which errors are reported and how they are displayed or logged. You can set the error reporting level using the error_reporting() function or the error_reporting directive in php.ini.',
    
      ' Turn on error reporting error_reporting(E_ALL);',
  
      ' E_ALL: Report all errors and warnings. E_ERROR: Report fatal run-time errors. E_WARNING: Report non-fatal run-time errors. E_NOTICE: Report notices.',
      
    
  ]}

     />
    </>
  )
}
