//button

const button = document.getElementById('calculateButt');

button.addEventListener('click', (myButton) => {
            myButton.preventDefault();
            gatherInputData();
            }); 


// indsamling af data fra dom (model code fra MVC)
function gatherInputData(){
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;
    const myDanishAmount = document.getElementById('danishAmount').value;
    
    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
    }
    
    //funktion 1
    function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
        let myEuro = calculateExchange (myEuroRate, myDanishAmount);
        let myDollar = calculateExchange (myDollarRate, myDanishAmount);
        
        showResult(myEuro, myDollar, myDanishAmount);
        }
        
        //funktion 2
        function calculateExchange (danskeKroner, vekselRate) {
            let myExchange = danskeKroner / vekselRate;
            return myExchange;
        }
        

        function showResult(myEuroResult, myDollarResult, myDanishAmount) {
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';
        
        }