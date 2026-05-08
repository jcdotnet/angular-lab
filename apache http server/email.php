<?php
 
header('Content-type: application/json');
 
 /*
$from_name = $_POST['nombre']; // Recibimos application/json, no application/x-www-form-urlencode
$from_email = $_POST['email'];
...

*/

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$from_name = $request->nombre;
$from_email = $request->email;
$email_subject = $request->asunto;
$message = $request->cuerpo;


$to_email = 'romanrubiojc@gmail.com';

$headers = "From: $from_email";

mail($to_email,$email_subject,$message, $headers); 

$response_array['status'] = 'success';
echo json_encode($response_array);


?>