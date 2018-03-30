export function decipherThis(str: string): string {
    // have fun!  
    const words = str.split(" ");
    const result:string[] = new Array();
    
    words.forEach(word =>{
        result.push(
            String.fromCharCode(+getLeadingNumbers(word))+
            switchFirstAndLastLetter(getLetters(word))
        );        
    });
    return result.join(' ');
  }

export function getLeadingNumbers(stringWithLeadingNumbers:string){
    return parseInt(stringWithLeadingNumbers);    
}

function getPositionOfFirstLetter(stringWithLeadingNumbers: string): number {
    return stringWithLeadingNumbers.search(/[A-Za-z]/);
}

export function getLetters(stringWithLeadingNumbers:string){
    const positionOfFirstLetter : number = getPositionOfFirstLetter(stringWithLeadingNumbers);
    return positionOfFirstLetter > -1 ? 
        stringWithLeadingNumbers.slice(positionOfFirstLetter,stringWithLeadingNumbers.length):
        '';
}

export function switchFirstAndLastLetter(stringToTwist:string){
    const charArray:string[] = stringToTwist.split('');
    const firstChar = charArray.shift();
    const lastChar = charArray.pop();
    charArray.unshift(lastChar)
    charArray.push(firstChar);
    return charArray.join('');

}