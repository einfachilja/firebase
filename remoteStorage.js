function onloadFunc() {
    console.log('test');
    loadData('/name'); // pfad für untere struktur
}

const BASE_URL = 'https://remotestorage-82664-default-rtdb.europe-west1.firebasedatabase.app/'; // konstant von Anfang an definieren

async function loadData(path='') { // zusätzlicher pfad um auf z.B. name zuzugreifen
    let response = await fetch(BASE_URL + path + '.json') // am Ende der url nach .json fragen, sonst gehts nicht!
    let responseJson = await response.json(); // wenn keine methode definiert, dann standard GET
    console.log(responseJson); // ausloggen in console oder returnen und mit loadData() weiterarbeiten...
}