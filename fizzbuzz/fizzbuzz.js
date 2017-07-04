var myGen = function () {
  for (var i=0; i < 50; i++) {
    console.log("La variable i vaut " + i);
    if (i%3 == 0)  {
      console.log("fizz")
    }
      else if (i%5 == 0) {
        console.log("buzz")
      }
  }
  return "Je suis fizzé ! Je suis buzzé !";
  // Si on veut que la fonction retourne quelque chose en dur dans la page HTML, il faut ajouter un 'return'
}
