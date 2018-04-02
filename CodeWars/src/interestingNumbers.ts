export class Kata{
        
    static isInteresting(n:number, awesomePhrases:number[]):number {
        
        if(this.match(n) || (awesomePhrases.length>0 && this.matchAwesomePhrase(n,awesomePhrases))){
            return 2;
        }
        if((this.match(n+1) || (awesomePhrases.length>0 && this.matchAwesomePhrase(n+1,awesomePhrases))) ||
        this.match(n+2) || (awesomePhrases.length>0 && this.matchAwesomePhrase(n+2,awesomePhrases))){
            return 1;
        }
        return 0;
    }

    static match(candidateNumber: number): boolean {
        if(candidateNumber<100){
            return false;
        }else{ 
            const candidateNumberAsCharArray: string[] = candidateNumber.toString().split('');
            return  this.endsWithZeros(candidateNumber) ||
                    this.areAllDigitsTheSame(candidateNumberAsCharArray) ||
                    this.consistsOfSequentiallyIncreasingNumbers(candidateNumberAsCharArray) ||
                    this.consistsOfSequentiallyDecreasingNumbers(candidateNumberAsCharArray) ||
                    this.isPalindrome(candidateNumberAsCharArray);
        }
    }

    static endsWithZeros(candidateNumber: number): boolean {
        return candidateNumber % Math.pow(10, candidateNumber.toString().length-1) === 0;
    }

    static areAllDigitsTheSame(digitArray: string[]): boolean {
        let allDigitsAreTheSame: boolean = true;
        digitArray.forEach((digit) => {
            if(digit !== digitArray[0]){
                allDigitsAreTheSame = false;
            }
        });
        return allDigitsAreTheSame;
    }

    static consistsOfSequentiallyIncreasingNumbers(digitArray: string[]): boolean {
        return digitArray.every((digit, index, digitArray) => {
                return index === 0 || 
                (this.isSuccessor(digit, digitArray[index - 1]) && digitArray[index - 1] !== '0')
        })        
    }

    static consistsOfSequentiallyDecreasingNumbers(digitArray: string[]): boolean {
        return digitArray.every((digit, index, digitArray) => {
                return index === 0 || 
                (this.isSuccessor(digitArray[index - 1], digit) && digitArray[index - 1] !== '0')
        })        
    }

    static isSuccessor(successor: string, predecessor: string): boolean {
        return parseInt(successor) === (parseInt(predecessor) + 1) % 10;
    }

    static isPalindrome(digitArray: string[]): boolean {
        while(digitArray.length > 1){
            if(digitArray.pop() !== digitArray.shift()){
                return false;
            }
        }
        return true;
    }

    static matchAwesomePhrase(candidateNumber: number, awesomePhrases: number[]): any {
        return awesomePhrases.indexOf(candidateNumber) > -1;
    }
}