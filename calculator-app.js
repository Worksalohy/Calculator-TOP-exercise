let screen = document.querySelector('.screen');
let allbut = document.querySelectorAll('.but');
let numValueOne = 0;
let numValueTwo = 0;
let operator = '';
let result = '';
let toDisplay = [];
let equal = '';

function operation(numOne, numTwo, oper){
    if(oper == '+'){
        return numOne + numTwo;
    }else if(oper == '-'){
        return numOne - numTwo;
    }else if(oper == 'x'){
        return numOne * numTwo;
    }else if(oper == '/'){
        return numOne / numTwo;
    }
}

for(but of allbut){
    but.addEventListener('click', (ev)=>{
        let toCheck = ev.target.innerHTML;
        if(equal == '' && Number(toCheck)  || toCheck == '0' || toCheck == '.'){
            toDisplay.push(toCheck);
            screen.innerHTML = toDisplay.join('');
        }else if(/^[-+x/]$/.test(toCheck)){
            numValueOne = Number(screen.innerHTML);
            operator = toCheck;
            toDisplay = [];
            equal = '';
        }else if(toCheck == "=" && operator !== ''){
            equal = "="
            numValueTwo = Number(toDisplay.join(''));
            toDisplay = [];
            screen.innerHTML = operation(numValueOne, numValueTwo, operator);
            toDisplay.push(operation(numValueOne, numValueTwo, operator));
            operator = '';
            numValueOne = 0;
            numValueTwo = 0;
        }else if(toCheck == 'AC'){
            screen.innerHTML = '';
            numValueOne = 0;
            numValueTwo = 0;
            toDisplay = [];
            equal = '';
        }else if(toCheck == '%'){
            if(toDisplay.length > 0 && numValueOne==0 && numValueTwo==0 && operator==''){
                toDisplay[0] = Number(screen.innerHTML)/100;
                screen.innerHTML = toDisplay[0];
            }
        }else if(toCheck == '+/-'){
            if(screen.innerHTML[0] == '-'){
                toDisplay = [];
                toDisplay[0] = Number(screen.innerHTML.toString().slice(1));
                screen.innerHTML = toDisplay;
                
            }else{
                toDisplay = [];
                toDisplay[0] = Number('-'+screen.innerHTML.toString());
                screen.innerHTML = toDisplay
            }
            
        }
    })
}