let myNumber = document.getElementById ('myNumber');
let counterButton = document.getElementById ('counterButton');

counterButton.onclick = function increment() {
    let number = parseInt(myNumber.innerText);
    number++;
    myNumber.innerText = number;
};


let div = document.getElementById ('div');
let buttonBackgroundColor = document.getElementById ('backgroundColor');

let colorArray = ["white", "yellow", "orange"];
let i = 0;

buttonBackgroundColor.onclick =  function (){
    div.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
};

let buttonIncreaseFontSize = document.getElementById ('increaseFontSize');

let fontSizeArray = ['9px', '10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px', '21px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '30px', '31px', '32px'];

buttonIncreaseFontSize.onclick = function (){
    div.style.fontSize = fontSizeArray [i];
    i++;
    if ( i>= fontSizeArray.length) {
        i=0;
    }
};


let buttonReduceFontSize = document.getElementById ('reduceFontSize');

buttonReduceFontSize.onclick = function (){
    div.style.fontSize = fontSizeArray [i];
    i--;
    if ( i>= fontSizeArray.length) {
        i=0;
    }
};
