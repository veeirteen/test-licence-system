let codes = [1, 2, 3, 4, 5];
let activ = [0, 0, 0, 0, 0];

function print(){
    console.log(codes+"");
    console.log(activ+"");
}

function activate(code) {
  ue = codes.indexOf(code);
  if (activ[ue] == 1) {
    activ[ue] = 2;
    console.log("activated " + code);
  } else if (activ[ue] == 0) {
    console.log("pay for start");
  } else if (activ[ue] == 2) {
    console.log("this code is activated");
  }
}

function pay() {
  ue = 0;
  while (activ[ue] == 1 || activ[ue] == 2){
    ue = ue + 1;
  }
  if (activ[ue] == 0) {
    activ[ue] = 1;
    console.log("payed");
    console.log("your code is " + codes[ue]);
  }
}