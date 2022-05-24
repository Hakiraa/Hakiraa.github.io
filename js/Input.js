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
        break;


        case "6AsS":
        break;


        case "7aAd":
        break;


        case "8fRa":
        break;


        case "9asD":
        break;


        case "10Sf":
        break;


        case "11Da":
        break;


        case "12dA":
        break;


        case "13gJ":
        break;


        case "14ds":
        break;


        case "15Ad":
        break;


        case "16Sf":
        break;


        case "17sN":
        break;


        case "18Ad":
        break;

        
        default:
            output.href="eingabe.html" 
            output.innerHTML = "Da hast du dich wohl vertippt"
        break;
    }
}