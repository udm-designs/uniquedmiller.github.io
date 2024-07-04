<?php
if(isset($_POST['submit'])){
    $to = "uniquedmiller@gmail.com"; // my email
    $from = $_POST['email']; //get users' email
    $name = $_POST['full_name'];
    $subject = "Portfolio Contact Message";
    $subject2 = "Copy of contact message";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['msg'];
    $message2 = "Copy of message " . $name . " wrote the following:" . "\n\n" . $_POST['msg'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); //sends copy to user
    echo "Message sent! Hope to be in touch soon, thank you " . $name . "!";
    }
?>