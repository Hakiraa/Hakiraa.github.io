const cocktime = 40;

const RemainingCooktime = function(gen_time, time_in){
    let out = gen_time - time_in;
    return out;
};

let x = RemainingCooktime(cocktime, 20)

console.log(x);

