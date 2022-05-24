let send = document.querySelector('#send')
let nput = document.querySelector('#get-in')
let output = document.getElementById("link")

function returnText(){
    let input = document.getElementById("get-in").value;
    switch(input){
        case "1AdD":
        output.href="1es-Jahr.html" 
        output.innerHTML = "Klick mich für das erste Jahr" 
        output.style.textDecoration = "underline"
        break;

        case "2Dfa":
        output.href="2es-Jahr.html" 
        output.innerHTML = "Klick mich für das zweite Jahr" 
        output.style.textDecoration = "underline"
        break;
        
        case "3sDf":
            output.href="3es-Jahr.html" 
            output.innerHTML = "Klick mich für das dritte Jahr" 
            output.style.textDecoration = "underline"
        break;
        case "4jAk":
            output.href="4es-Jahr.html" 
            output.innerHTML = "Klick mich für das Vierte Jahr" 
            output.style.textDecoration = "underline"
        break;


        case "5AdF":
            output.href="5es-Jahr.html" 
            output.innerHTML = "Klick mich für das Fünfte Jahr" 
            output.style.textDecoration = "underline"
        break;


        case "6AsS":
            output.href="6es-Jahr.html" 
            output.innerHTML = "Klick mich für das Sechse Jahr" 
            output.style.textDecoration = "underline"
        break;


        case "7aAd":
        output.href="https://www.youtube.com/watch?v=4ppvRjQRCVQ" 
        output.innerHTML = "Klick mich für das Siebte Jahr(Von Quinn (die kleine hure))" 
        output.style.textDecoration = "underline"
        break;


        case "8fRa":
        output.href="8es-Jahr.html" 
        output.innerHTML = "Klick mich für das achte Jahr (von Ilvi(empfehle handy im querformat))" 
        output.style.textDecoration = "underline"
        break;


        case "9asD":
        output.href="9es-Jahr.html" 
        output.innerHTML = "Klick mich für das neunte Jahr" 
        output.style.textDecoration = "underline"
        break;


        case "10Sf":
        output.href="https://youtu.be/RMx90twCZ54" 
        output.innerHTML = "Klick mich für das Zehnte Jahr" 
        output.style.textDecoration = "underline"
        break;


        case "11Da":
        output.href="11es-Jahr.html" 
        output.innerHTML = "Klick mich für das Elfte Jahr" 
        output.style.textDecoration = "underline"
        break;


        case "12dA":
        output.href="12es-Jahr.html" 
        output.innerHTML = "Klick mich für das Zwölfte Jahr" 
        output.style.textDecoration = "underline"
        break;


        case "13gJ":
        output.href="13es-Jahr.html" 
        output.innerHTML = "Klick mich für das Dreizehnte Jahr" 
        output.style.textDecoration = "underline"
        break;


        case "14ds":
        output.href="14es-Jahr.html" 
        output.innerHTML = "Klick mich für das Vierzehnte Jahr" 
        output.style.textDecoration = "underline"
        break;


        case "15Ad":
            output.href="15es-Jahr.html" 
            output.innerHTML = "Klick mich für das Fünfzehnte Jahr" 
            output.style.textDecoration = "underline"
        break;


        case "16Sf":
            output.href="16es-Jahr.html" 
            output.innerHTML = "Klick mich für das Sechszehnte Jahr" 
            output.style.textDecoration = "underline"
        break;


        case "17sN":
            output.href="17es-Jahr.html" 
            output.innerHTML = "Klick mich für das Siebzehnte Jahr" 
            output.style.textDecoration = "underline"
        break;


        case "18AddsafD":
            output.href="18es-Jahr.html" 
            output.innerHTML = "Klick mich für das Achtzehnte und letzte Jahr" 
            output.style.textDecoration = "underline"
        break;

        
        default:
            output.href="eingabe.html" 
            output.innerHTML = "Da hast du dich wohl vertippt"
        break;
    }
}
