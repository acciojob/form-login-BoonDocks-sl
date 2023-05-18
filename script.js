function getFormvalue() {
  const firstName = document.getElementById("form1").elements["fname"].value;
  const lastName = document.getElementById("form1").elements["lname"].value;
  
  alert("First name: " + firstName + "\nLast name: " + lastName);
}
