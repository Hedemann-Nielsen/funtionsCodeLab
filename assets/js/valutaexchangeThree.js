
//Dom elementer jeg har brug for
        


// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
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
    


// håndterer data behandling  (controller code fra MVC)



// sub funktion der udfører en opgave og returnerer et resultat.  stadig controller code i MVC




// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}







