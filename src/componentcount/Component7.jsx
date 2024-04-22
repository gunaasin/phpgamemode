import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component7 = () => {
    const codesnip = {
        php: `<?php
    // The get method already call the html
    // set the value into name , email like  $name = $_POST['name'];  $email = $_POST['email'];
   
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
      
    
        // Process the data (for demonstration, just printing it)
        //print the values
   
        echo "Form submitted successfully!";
    } else {
        // Handle invalid request method (for example, if someone accesses this script directly via URL)
        echo "Invalid request method!";
    }
    ?>
    
    
    `}
    const answer = {
        php: ` <?php
    // The get method already call the html
    // set the value into name , email like  $name = $_POST['name'];  $email = $_POST['email'];
   
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $name = $_POST['name'];
        $email = $_POST['email'];
    
        // Process the data (for demonstration, just printing it)
        //print the values
        echo "Name: $name";
        echo "Email: $email ";
        echo "Form submitted successfully!";
    } else {
        // Handle invalid request method (for example, if someone accesses this script directly via URL)
        echo "Invalid request method!";
    }
    ?>
      `}
    return (
        <>
            <Maincom title={"Event Handling"}
                game={"https://gunaasin.github.io/superlisatar/"}
                url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/0690d5b71d16e3ce8f/5523b250424438a2'}
                steps={['Event Handling in php: In php, event handling is commonly done using the addEventListener method to attach event listeners to DOM elements. Event listeners can listen for various events, such as click, mouseover, keydown, submit, etc.',

                    'In this PHP script (process_form.php), we check if the request method is POST (indicating that the form has been submitted). If it is, we retrieve the form data using $_POST superglobal array and process it (in this case, simply printing it to the screen). If the request method is not POST, we handle the situation accordingly (in this case, printing an error message).',
                    'Step 1: Retrieve form data',
                    'Step 2: Process the data (for demonstration, just printing it).',
                    'Step 3: Handle invalid request method (for example, if someone accesses this script directly via URL)',
                ]}
                codesnip={codesnip}
                answer={answer}
            />

        </>
    )
}
