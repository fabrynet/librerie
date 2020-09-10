<?php

// Array casuale di 15 numeri compresi tra 0 e 100 non ripetuti
$randomArray = [];

while (count($randomArray) < 15) {
  $number = rand(0,100);
  if (!in_array($number, $randomArray)) {
    $randomArray[] = $number;
  }
}

//il server ritorna 'vero' o 'falso' a seconda che esista o meno la combinazione
// di vestito e taglia
$db = [
  [
    'name' => 'vestito1',
    'desc' => 'desc1',
    'size' => [
      'XS', 'S', 'M'
    ]
  ],
  [
    'name' => 'vestito2',
    'desc' => 'desc2',
    'size' => [
      'S', 'M', 'L'
    ]
  ],
  [
    'name' => 'vestito3',
    'desc' => 'desc3',
    'size' => [
      'M', 'L', 'XL'
    ]
  ]
];

$name = $_GET['name'];
$size = $_GET['size'];

foreach ($db as $dbDress) {
  if ($name == $dbDress['name']) {
    foreach ($dbDress['size'] as $dbSize) {
      if ($size == $dbSize) {
        echo json_encode('true');
        return; //mi assicuro che l'algoritmo termini senza ciclare su tutto il database
      }
    }
    echo json_encode('false');
    return;
  }
}
echo json_encode('false');
return;

?>
