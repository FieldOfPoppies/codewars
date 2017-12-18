export function numbersWithDigitInside(x:number, d:number):number[] {    
    var numbers = findNumbersWithDigitInside(x,d);
    return assembleResultArray(numbers);     
}

function assembleResultArray(numbers: number[]) {
    var result = [0,0,0];
    if (numbers.length > 0) {
        result[0] = (numbers.length);
        result[1] = (numbers.reduce((a, b) => { return a + b; }));
        result[2] = (numbers.reduce((a, b) => { return a * b; }));
    }
    return result;
}

export function findNumbersWithDigitInside(x:number, d:number):number[] {
    var result = [];
    for(var i = 1; i<=x; i++){
        if(containsDigit(i,d)){
            result.push(i);
        }
    }
    return result;
}

export function containsDigit(i:number, d:number){
    return i.toString().search(d.toString()) >= 0;
}