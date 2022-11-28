const header = document.getElementById('header');
const button = document.getElementById('button');
const Entry = document.getElementById('numberentry');



const test = function(){
    let retur = "";
    let inp = parseInt(Entry.value);
    let s = inp
    while (s > 0) {
        inp = Math.floor(s % 2);
        s = Math.floor(s / 2);
        console.log(inp);

        retur = inp.toString() + retur;
    }
    return retur;
};

button.onclick = () => {
    header.innerHTML = "in binär: " + test();
}
    
