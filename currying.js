//sebelum currying
function hitungVolume (p,l,t) {return p* l * t};
console.log (hitungVolume(4,5,6))

//sesudah currying
function hitungVolumes (p) { 
    return function (l){
        return function (t){
            return p*l*t;
        }
    }}

    console.log (hitungVolumes (4) (5) (6) )