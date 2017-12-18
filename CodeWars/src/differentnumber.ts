export function iqTest(numbers: string): number {
    var parsedNumbers = numbers.split(" ");
    var oddNumbersPosition = markOddNumbers();
    return markSpecialPosition();    

    function markSpecialPosition() {
        return oddNumbersPosition.reduce((a, b) => a + b) == 1 ?
            oddNumbersPosition.indexOf(1) + 1:
            oddNumbersPosition.indexOf(0) + 1;
    }
    function markOddNumbers(){
        return parsedNumbers.map(x=>Number(x)%2);
    }    
  }