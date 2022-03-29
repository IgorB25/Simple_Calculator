let DisplayValue;
    
let output = document.querySelector('#output');

let number = document.querySelectorAll(".number").forEach(number => {
    number.addEventListener('click', () =>{
        FirstNum = number.textContent;
        DisplayValue = number.textContent;
        output.textContent += FirstNum;
    
    })
})





 function add(FirstNum,SecondNum){
    FirstNum += SecondNum;
    console.log(FirstNum);
}
//add(2,4)


function subtract(FirstNum,SecondNum){
    FirstNum -= SecondNum;
    console.log(FirstNum);
}
//subtract(7,6)


function multiply(FirstNum,SecondNum){
    FirstNum *= SecondNum;
    console.log(FirstNum)
}
//multiply(3,10)

function divide(FirstNum,SecondNum){
    FirstNum /= SecondNum;
    console.log(FirstNum)
}
//divide(9,3)

function operate(operator,FirstNum,SecondNum){

    switch(operator){

        case "+":
            add(FirstNum,SecondNum);
            break;

        case "-":
            subtract(FirstNum,SecondNum);
            break;

        case "*":
            multiply(FirstNum,SecondNum);
            break;

        case "/":
            divide(FirstNum,SecondNum);
            break;

    }
}

//operate("/",7,2)


  