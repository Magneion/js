var printForm = function() {
  var box = documents.getElementsById("box");
  box.innerHTML =
  "Nom: " + document.getElementById('lastname').value + "<br />" +
  "Prénom: " + document.getElementById('firstname').value + "<br />" +
  "Date de naissance: " + document.getElementById('birthdate').value + "<br />" +
  "Adresse: " + document.getElementById('address').value + "<br />" +
  "Code postal: " + document.getElementById('zipcode').value + "<br />"
  "Ville: " + document.getElementById('city').value + "<br />"
  "Genre: " + document.getElementById('gender').value + "<br />"
  "Maison: " + document.getElementById('gender').value + "<br />";
}
