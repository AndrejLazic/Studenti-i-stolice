const input = prompt("Unesite broj stolica");
n = [];

for(i = 0; i < input; i++){
  n.push(0);
}

var inc = 0;
for (let i = 0; i < n.length; i++) {
    inc++;
    if (i == 0){
        for(let j = 0; j < n.length; j ++){
            if(n[j] == 0){
              n[j] = 1;
            }else if(n[j] == 1){
              n[j] = 0;
            }
        }
    }else{
        for(let j = inc - 1; j < n.length; j += inc){
            if(n[j] == 0){
                n[j] = 1;
            }else if(n[j] == 1){
                n[j] = 0;
            }
        }
    }
    console.log(n);
}

var sum = 0;
  for(x = 0; x < n.length; x++){
    if(n[x] == 1){
      sum++;
    }
}
console.log("Broj studenata koji sede:  " + sum);
alert("Broj studenata koji sede:  " + sum);