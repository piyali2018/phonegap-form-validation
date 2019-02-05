/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//  const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

  function checkForm(form){
    var dateString = document.getElementById("birthdate").value;
  var myDate = new Date(dateString);
  var today = new Date();
  if ( myDate > today ) { 
      alert("Birthdate should be less than current date");
      return false;
  }

    if(!form.terms.checked) {
      alert("Please indicate that you accept the Terms and Conditions");
      form.terms.focus();
      return false;
    }
    return true;
 }
 
 function clearAll(){
   document.getElementById("email").value="";
   document.getElementById("personalURL").value="";
   document.getElementById("birthdate").value="";
   document.getElementById("male").checked=false;
   document.getElementById("female").checked=false;
   document.getElementById("other").checked=false;
   document.getElementById("comments").value="";
 }

 function checkDOB() {
  var dateString = document.getElementById("birthdate").value;
  var myDate = new Date(dateString);
  var today = new Date();
  if ( myDate > today ) { 
      alert(1);
      return false;
  }
  return true;
}

