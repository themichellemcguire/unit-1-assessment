count = 0;
function increase() {
   var input = document.getElementById('input');
   var a = input.value;
   var counter = document.getElementById("num").textContent;
   var c = Number(counter);
   var total = Number(a) + Number(c);
   document.getElementById("num").innerHTML = total;
}

function decrease() {
   var input = document.getElementById('input');
   var a = input.value;
   var counter = document.getElementById("num").textContent;
   var c = Number(counter);
   var total = Number(c) - Number(a);
   document.getElementById("num").innerHTML = total;
}


