function primeCheck(num) {

    // Assume that the number is a positive real number greater than 10.
        results = [];

    // Last Digit Test
        var stringedNum = num.toString();
        var digit = Number(stringedNum[stringedNum.length-1]);
        if (digit === 0 | digit === 2 | digit === 4 | digit === 5 | digit === 6 | digit === 8) {
            results.push(['Last Digit Test','NOT']);
        }
        else if (digit === 1 | digit === 3 | digit === 7 | digit === 9) {
            results.push(['Last Digit Test','POTENTIALLY']);
        }

    // Divisible-by-Three Test
        var latestNum = num;
        while (latestNum.length > 2) {
            var currentNum = 0;
            for (var a=0; a<latestNum.length; a++) {
                currentNum += Number(latestNum[a]);
            }
            latestNum = currentNum;
        }
        if (latestNum % 3 === 0) {results.push(['Divisible-by-Three Test','NOT']);}
        else {results.push(['Divisible-by-Three Test','POTENTIALLY']);}
    
    // Near-Six Test
        var nearSix = false;
        var test = num - 1;
        if (test % 6 === 0) {nearSix = true;}
        test = num + 1;
        if (test % 6 === 0) {nearSix = true;}
        if (nearSix === true) {results.push(['Near-Six Test','POTENTIALLY']);}
        if (nearSix === false) {results.push(['Near-Six Test','NOT']);}
    
    displayResults();

};



var results = [];



function displayResults() {
    var display = '<table>';
    var conclusion = 'INCONCLUSIVE';
    for (var a=0; a<results.length; a++) {
        display += `<tr><td>${results[a][0]}</td><td>This number is ${results[a][1]} a prime.</td></tr>`;
        if (results[a][1] === 'NOT') {conclusion = 'NOT A PRIME';}
        if (results[a][1] === 'DEFINITELY') {conclusion = 'PRIME';}
    }
    display += `<tr><td>Conclusion</td><td style='font-weight:bold;'>${conclusion}</td></tr></table>`;
    $('#output').html(display);
};