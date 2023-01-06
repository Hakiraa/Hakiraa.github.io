//variables

const canvasx = 1200
const canvasy = canvasx
const DIM = 10
//----------------------------------------------------------------
let img;
let grid = []
let tiles = []
let tilerules = []
let Used_places = []
let prioritylist = []
//----------------------------------------------------------------
let UP_;
let RIGHT_;
let DOWN_;
let LEFT_;
let EMPTY_;
let STRAIGHT_;
let STRAIGHT_HOR_;
//----------------------------------------------------------------
const UPrules = [1, 1, -1, 1]
const RIGHTrules = [1, 1, 1, -1]
const DOWNrules = [-1, 1, 1, 1]
const LEFTrules = [1, -1, 1, 1]
const EMPTYrules = [-1, -1, -1, -1]
const STRAIGHTrules = [1, -1, 1, -1]
const STRAIGHT_HORrules = [-1, 1, -1, 1]

tilerules.push(UPrules, RIGHTrules, DOWNrules, LEFTrules, EMPTYrules, STRAIGHTrules, STRAIGHT_HORrules) 

//----------------------------------------------------------------
class Tile { //Tile constructor
  constructor(state, img, up, right, down, left, none, ege){
    this.state = state
    this.imag = img
    // up , right, down, left 
    this.roules = [up,right,down,left];
    this.test = none
    this.ege = ege;
  }
}// Tile
//----------------------------------------------------------------
function preload() { // set up grid and corners
  console.log("preload starting...")

  UP_ = loadImage("tiles/Up.png");
  RIGHT_ = loadImage("tiles/Right.png");
  DOWN_ = loadImage("tiles/Down.png");
  LEFT_ = loadImage("tiles/Left.png");
  EMPTY_ = loadImage("tiles/Empty.png");
  STRAIGHT_ = loadImage("tiles/Straight.png");
  STRAIGHT_HOR_ = loadImage("tiles/Straight_Hor.png");

  tiles.push(UP_, RIGHT_,DOWN_, LEFT_,EMPTY_, STRAIGHT_,STRAIGHT_HOR_);
  console.log("Tiles loaded")

  console.log("Preload Done!");
}//preload 


for(let i = 0; i < DIM * DIM; i++){ // Create grid
  let buffer;
  let w = undefined;
  let i_ = i+1 % DIM
  if (i_ % DIM == 0){ 
    w = "right"
  }
  if (i % DIM == 0){
    w = "left"
  }
  buffer = new Tile(false, undefined, 0,0,0,0, `tile: ${i}`, w);
  grid.push(buffer)
}// grid
console.log("Grid loaded with: " + grid.length + " tiles!") 
 

function setup(){
  createCanvas(canvasx, canvasy);
  clear()
  background(51);
}// seting basic properties

function draw(){




  createDATA();
  drawgrid();
}

function drawgrid(){ // drawing all grid elements and grid
  index = 0
  x1 = 0 
  y1 = 0 
  x2 = 0 
  y2 = 0 
  _x2 = 0 
  _y1 = 0 
  _y2 = 0 
  let test = true
  for (let i = 0; i < DIM; i++){ // Cerating rows
      line(x1, y1, canvasx, y1)
      stroke(111) 
      _x1 = 0 
      _x2 = 0
      for (let i_ = 0; i_ < DIM ; i_++){ //Split rows up in to columns
          stroke(111)
          let buffer = grid[index]
          if (buffer.imag == undefined){
            _x2 += canvasy / DIM
            _x1 += canvasy / DIM
            _y1 = y1
            _y2 = y1 - canvasy / DIM
            line(_x1, _y1, _x2, _y2)
            
            index += 1 
            continue;
          }
          if(buffer.state){
            image(buffer.imag,_x2, y1, canvasx/DIM, canvasx/DIM)
          }
          //console.log(buffer)
          //console.log(`Index: ${index},name ${buffer.test}, x1: ${_x1}, y1: ${_y1},_________x2: ${canvasx/4}, y2: ${canvasx/4}`)
          
          _x2 += canvasy / DIM
          _x1 += canvasy / DIM
          _y1 = y1
          _y2 = y1 - canvasy / DIM
          
          //console.log(index)
          index += 1
          
          line(_x1, _y1, _x2, _y2)
        }
    y1 +=  canvasy / DIM
  }
}
function createDATA(){
  let Used_places = [];
  let Datagrid = []
  for(var i = 0; i < grid.length; i++){ //get data from grid
    if (grid[i].imag == undefined){
      // console.log(grid[i].imag)
      let value = 0;
      for (var j = 0; j < grid[i].roules.length; j++){
        let x = 0 
        if (grid[i].roules[j] < 0){
          x = grid[i].roules[j] * -1
        }else{
          x = grid[i].roules[j]
        } 
        value += x
              // console.log(buffer)
      } // for each roule
      if (value == 0){
        // console.log("nö: " + i)
      } else {
        // console.log("pushing data: " + i)
        Datagrid.push({data: [i, value]});
      }

    }else{ // if image is undefined
      Used_places.push(i);
      continue;
    }
  }// for each place in grid
  if (Used_places.length == 0){ //set starter tile
    addTile(ownRandom(0 , tiles.length - 1), ownRandom(0, grid.length - 1));
  } else {
    let higest = 0
    let highest_list = []
    let newtilepos;
    for(var d = 0; d < Datagrid.length; d++) {
      let disdata = Datagrid[d].data[1];
      let displace = Datagrid[d].data[0];
      
      if (disdata > higest) {
        highest_list.length = 0
        highest_list.push(displace)
        higest = disdata;

      } else if (disdata == higest) {
        highest_list.push(displace)
      } else {
        console.log("skip"+ d)
      }
    }
    newtilepos = highest_list[ownRandom(0, highest_list.length -1)]
    console.log("--------------------------------")
    console.log("newtilepos: ")
    console.log(newtilepos)
    let newtile = gettilbyrule(newtilepos)
    
    console.log("newtile: " + newtile)
     console.log("--------------------------------")
    addTile(newtile, newtilepos)
  } // iff used places.len != 0
}//addcontent
function gettilbyrule(id){
  let ownroules = grid[id].roules
  let posibletiles = []

  for (let i = 0; i < tilerules.length; i++){//for each roule 
    let thisroule = tilerules[i];
    let possible = true

    for (let r = 0; r < ownroules.length; r++){// for each side in roules
      if (ownroules[r] == 0){
        continue;
      } else if (ownroules[r] != thisroule[r]) {
        possible = false;
      }
    }// for each side in roules
    if (possible){
      posibletiles.push(i)
    }
  }//for each roule
  for (i = 0; i < posibletiles.length; i++){
    console.log("Ownroules: " + ownroules)
    console.log(id)
    // console.log(tiles[posibletiles[i]])
    console.log(tilerules[posibletiles[i]])
  }

  return posibletiles[ownRandom(0 , posibletiles.length -1)];  
}

function addTile(newtile, newtilepos){ //seting up rules to the sorounding pieces
  //0:up 1:left 2:down 3:right
  //tiledetaktion(newtilepos)
  console.log(newtilepos)
  grid[newtilepos].roules = tilerules[newtile]
  console.log(grid[newtilepos].roules) 
  const thisOB = grid[newtilepos];
  const thisRulUP = grid[newtilepos].roules[0];
  const thisRulRIGHT = grid[newtilepos].roules[1];
  const thisRulDOWN = grid[newtilepos].roules[2];
  const thisRulLEFT = grid[newtilepos].roules[3]; 
  console.log("--------------------------------")
  console.log(thisOB)
  console.log("--------------------------------")
    // /UP:
    if (newtilepos - DIM >= 0){
      grid[newtilepos - DIM].roules[2] = thisRulUP; 
    }
    // /DOWN:
    if(newtilepos + DIM < DIM*DIM){
      grid[newtilepos + DIM].roules[0] = thisRulDOWN;
    }
    //left
    if (thisOB.ege != "left"){
      grid[newtilepos - 1].roules[1] = thisRulLEFT;
    }
    if (thisOB.ege != "right"){
      grid[newtilepos + 1].roules[3] = thisRulRIGHT;
    }
    grid[newtilepos] = new Tile(true, tiles[newtile], 0,0,0,0, `tile: ${newtile}`); 
}//addTile



function debugList(list, para){
  if (para == null || para == undefined || para.length == 0){
    for (let i = 0; i < list.length; i++) {
      console.log("--------------------------------")
      console.log("Entry number: " + i);
      console.log("value: ")
      console.log(list[i])
      console.log("--------------------------------")
    }
  }else{
    for (let i = 0; i < list.length; i++) {
      console.log("--------------------------------")
      console.log("Entry number: " + i);
      console.log("value: ")
      console.log(list[i][para])
      console.log("--------------------------------")
    }
  }
}

function ownRandom(min, max){
  let buffer;
  buffer = Math.floor(Math.random() * (max - min + 1) ) + min;
  return buffer;
}//ownRandom