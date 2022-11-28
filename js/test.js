const header = document.getElementById('header');
const button = document.getElementById('button');
const Entry = document.getElementById('numberentry');

let x = 0;
console.log(Math.floor(x / 2));
console.log(Math.floor(x % 2));

const test = function(){
    let retur = "";
    let inp = parseInt(Entry.value);
    let s = inp
    while (s > 0) {
        s = Math.floor(s / 2);
        inp = Math.floor(s % 2);

        retur = retur + inp;
    }
    return retur;
};

button.onclick = () => { console.log(test()); }
    
