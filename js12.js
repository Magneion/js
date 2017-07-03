var result = document.getElementById('result');

var myControl = function() {
  if (parseInt(nbr.value)%2==0) {
    result.innerHTML = 'pair';
  }
  else {
    result.innerHTML = 'impair';
  }
}

var nbr = document.getElementById('nbr');
