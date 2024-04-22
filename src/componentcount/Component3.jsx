import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component3 = () => {
  const codesnip = {
    php: `\
<?php
//select data SELECT id, name, email FROM users
$sql = "";
$result = mysqli_query($conn, $sql);
    
    // Check if there are results
if (mysqli_num_rows($result) > 0) {
        // Output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
        }
} else {
        echo "0 results";
}
    
    `}
    const answer = {
      php: `\ 
      <?php
//select data SELECT id, name, email FROM users
$sql = "SELECT id, name, email FROM users";
$result = mysqli_query($conn, $sql);
    
    // Check if there are results
if (mysqli_num_rows($result) > 0) {
        // Output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
        }
} else {
        echo "0 results";
}
    
    
      
      `}
  return (
    <>
    <Maincom  title={"Data Interaction"}
    game={"https://gunaasin.github.io/dataintegration/"}
    
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/4d90d5b71d19edc8c4/88e9e4e38edb9c9a'}
     steps={[
     'Data interaction in a game involves storing and retrieving various types of game-related data, such as player information, game progress, scores, items, and more. PHP can be used to interact with a database to manage this data effectively. Heres how you can implement data interaction through a game using PHP:',
     'Executing SQL Queries: Once the connection is established, you can execute SQL queries using mysqli_query() or prepared statements in PDO.',
     'Step 1:  They connect to the database, execute SQL queries, and validate user input.',
     'Step 2: Print the val  echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]',

     ]}
     answer={answer}
     codesnip={codesnip}
     />
    </>
  )
}
