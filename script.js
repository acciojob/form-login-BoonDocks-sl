function getFormvalue() {
  const firstName = document.getElementById("form1").elements["fname"].value;
  const lastName = document.getElementById("form1").elements["lname"].value;

  const fullName = firstName + " " + lastName;
  alert(fullName);
}
