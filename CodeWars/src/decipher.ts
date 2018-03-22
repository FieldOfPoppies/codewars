export function decipherThis(str: string): string {
    // have fun!  
    const words = str.split(" ");
    const result:string[] = new Array(words.length);
    words.forEach(word =>{
        let chars = word.split("");
        let lastChar = chars.pop();
        let firstChar:string = chars.shift();
        let code: string | undefined;
        code = getCharCodeForFirstLetter(firstChar, chars);
        const decodedFirstChar = String.fromCharCode(+code);
        result.push(decodedFirstChar + lastChar + chars.join('') + firstChar);
    });
    return result.join(' ');
  }
  

export function getCharCodeForFirstLetter(firstChar: string, chars: string[]) {
    let code: string = '';
    while (!isNaN(Number(firstChar))) {
        code += firstChar;
        firstChar = chars.shift();
    }
    return code;
}
  