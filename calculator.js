
let currentInput='';
let currentOperation='';
let previousInput='';

function appendNumber(Number){
    currentInput += Number;
    document.getElementById('display').value=`${previousInput} ${currentOperation} ${currentInput}`;
    }
    
    function appendOperation(operation){
        if(currentInput ==='') return;
        if(previousInput !==''){
            calculate();
        }
        currentOperation = operation;
        previousInput = currentInput;
        currentInput ='';
        document.getElementById('display').value=`${currentInput} ${currentOperation}`;
    }

    function calculate(){
        if (previousInput === ''|| currentInput === '') return;
        let result;
        let prev =parseFloat(previousInput);
        let current=parseFloat(currentInput);

        switch (currentOperation){
            case '+':
                result=prev+current;
                break;
            case '-':
                result=prev-current;
                break;
            case '/':
                if (current === 0){
                    alert('You cannot divide 0');
                    return;
                }
                result=prev/current;
                break;
            case '*':
                result=prev*current;
                break;
                default:
                    return;
        }
        currentInput =result.toString();
        previousInput='';
        currentOperation='';
        document.getElementById('display').value=currentInput;

        function clearDisplay(){
            currentInput='';
            previousInput='';
            currentOperation='';
            document.getElementById('display').value='';
        }
    }
    
