function onloadFunc() {
    console.log("test");
    postData("/name",  {"color": "yellow"}); // pfad für untere struktur
}

const BASE_URL = "https://remotestorage-82664-default-rtdb.europe-west1.firebasedatabase.app/"; // konstant von Anfang an definieren

async function loadData(path = "") { // zusätzlicher pfad um auf z.B. name zuzugreifen
    let response = await fetch(BASE_URL + path + ".json") // am Ende der url nach .json fragen, sonst gehts nicht!
    let responseJson = await response.json(); // wenn keine methode definiert, dann standard GET
    console.log(responseJson); // ausloggen in console oder returnen und mit loadData() weiterarbeiten...
}

async function postData(path = "", data = {}) { // in den angegebenen Pfad wird die neue data übergeben
    let response = await fetch(BASE_URL + path + ".json", {
        method: "POST", // methode POST "schreiben" wird angewandt
        header: {   // header muss mitgegeben werden, z.B. dass es sich um json handelt
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)  // im body wird die eigentliche Datei mitgegeben bzw. inhalt
    });
    return responseJson = await response.json(); // notwendig, damit die function postData() auch etwas zurückmeldet
}