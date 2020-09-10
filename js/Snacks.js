// scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){

  for (var i = 1;i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
      list.innerHTML += "<li>FizzBuzz</li>";
    } else if (i%3 == 0) {
      list.innerHTML += "<li>Fizz</li>";
    } else if (i%5 == 0) {
      list.innerHTML += "<li>Buzz</li>";
    } else {
      list.innerHTML += "<li>" + i + "</li>";
    }
  }

});

// --------------------------- FUNCTIONS Utility --------------------------- //

// funzione che genera un numero casuale compreso tra i due parametri min e max
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// algoritmo Bubble Sort per ordine crescente
function bubbleSort(array) {
  for (var i = 0 ; i < array.length -1 ; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      //se l'elemento è maggiore del successivo faccio lo swap degli elementi
      if (array[j] > array[j+1]) {
        var tmp = array[j+1];
        array[j+1] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}

// Funzione che ordina un oggetto JS (array nominale) secondo la chiave che gli passiamo
// Ordine decrescente
function sortByKeyDesc(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
}

// Funzione che ordina un oggetto JS secondo la chiave che gli passiamo
// Ordine crescente
function sortByKeyAsc(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

// funzione che restituisce l'orario attuale a due cifre
function getActualHour () {
  var d = new Date();
  var hours = ("0" + d.getHours()).slice(-2);
  var minutes = ("0" + d.getMinutes()).slice(-2)
  var time = hours + ":" + minutes;
  return time;
}

// funzione che controlla se un elemento è presente nell'array
function inArray(array, element) {
  var i = 0;
  var found = false;
  while (i < array.length && found == false) {
    if(array[i] == element) {
      found = true;
    }
    i++;
  }
  return found;
}

// funzione che restituisce un array di numeri casuali, non ripetuti, dando come parametri valore min, valore max e numero elementi. Se i parametri non sono corretti restituisce false
function randomArray(elements, min, max) {
  var array = [];
  var random;
  while (array.length < elements) {
    random = getRandomIntInclusive(min, max);
    // controllo che i numeri generati non siano duplicati
    if (!inArray(array,random)) {
      array.push(random);
    }
  }
  return array;
}

// funzione che controlla se un numero sia nel range voluto
function inRange(min, max, num) {
  if(num >= min && num <= max && !isNaN(num)) {
    return true;
  }
  return false;
}

// Funzione che inverte una stringa
function stringInvert(string) {
  var stringInverted = "";
  for (var i = string.length -1; i >= 0; i--) {
    stringInverted += string[i];
  }
  return stringInverted;
}

//Funziona che controlla se una stringa è palindroma
function isPalindroma(string) {
  var stringInverted = stringInvert(string);
  if (stringInverted == string) {
    return true;
  } else {
    return false;
  }
}

//Funzione che controlla se un numero è pari
function isPari(num) {
  if (num%2) {
    return false;
  } else {
    return true;
  }
}
