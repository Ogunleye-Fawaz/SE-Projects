var number = 0; //sets default to zero

function increase() {
    number++; //increases number by 1
    document.getElementById('counter').innerHTML = 'Counter:' + '' + number; //assigns to the counter element


}
function decrease() {
    number--; //decreases number by 1
    document.getElementById('counter').innerHTML = 'Counter:' + '' + number; // assigns to the counter element


}

function reset() {
    number = 0; //resets to zero
  document.getElementById('counter').innerHTML = 'Counter:' + '' + number;


}

