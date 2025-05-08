function onloadFunc() {
    console.log('test');
    loadData();
}

const BASE_URL = 'https://remotestorage-82664-default-rtdb.europe-west1.firebasedatabase.app/'; // konstant von Anfang an definieren

async function loadData() {
    let response = await fetch(BASE_URL + '.json') // am Ende der url nach .json fragen, sonst gehts nicht!
    let responseJson = await response.json();
    console.log(responseJson);
}