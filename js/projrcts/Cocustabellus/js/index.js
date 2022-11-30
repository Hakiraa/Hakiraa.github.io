let Entry = document.getElementById('entry');

api_url = 
getdata();
async function getdata(){
    const response = await fetch('some.json')
    const data = await response.json();
    console.log(data);
}


const data_get = function(dataT, name){
    return output;
};

//console.log(readFile('Input.txt', 'utf-8',))

const keydetect = function(ent){
    if (ent == keyword) {
        return true;
    } else {
        return false;
    }
};
//console.log(data_get())