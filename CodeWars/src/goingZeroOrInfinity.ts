import { read } from "fs";

export class G964 {
    public static going(n: number): number {
        var result = this.divideByFaculty(n) * this.addFaculties(n)
        return Number(result.toFixed(6));
    }

    public static divideByFaculty(n:number) : number{
        return 1 / this.calculateFaculty(n);
    }

    public static addFaculties(n: number) : number {
        if(n == 1){
            return 1
        }
        return this.addFaculties(n-1) + this.calculateFaculty(n);
    }

    public static calculateFaculty(n:number) : number {
        if(n == 0) {
            return 1
        }
        else
            return n * this.calculateFaculty(n-1);
    }
    public static multiply(a : string, b : string) : string {
        var longerNumber = a.length >= b.length ? a.split("") : b.split("");
        var shorterNumber = a.length < b.length ? a.split("") : b.split("");
        var result;
        var intermediaryProducts = [];
        var currentFaktor;
        var decimals = 1;
        while(shorterNumber.length > 0){
            currentFaktor = this.getLastEntryOrZero(shorterNumber) * decimals;
            intermediaryProducts.push(this.multiplySingleLine(longerNumber,currentFaktor))
            decimals = decimals * 10;
        }
        result = intermediaryProducts.reduce(function (
            accumulator,
            currentValue,
            currentIndex,
            array
          ) {
            return this.add(accumulator + currentValue);
          });
        return result;
    }

    public static multiplySingleLine(numberAsArray, currentFaktor) : string {
        var product;
        var overhead = 0;
        var rest;
        var result = [];
        while(numberAsArray.length > 0){
            product = (this.getLastEntryOrZero(numberAsArray) * currentFaktor) + overhead;
            rest = product % 10;
            overhead = Math.floor(product / 10);
            result.push(rest);
        }
        if(overhead > 0){
            result.push(overhead.toString());
        }
        return result.reverse().join("");
    }

    public static add(a:string, b:string):string {
        var intermediarySum;
        var rest = 0;
        var overhead = 0;
        var aSplitToSingleDigitNumbers = a.split("");
        var bSplitToSingleDigitNumbers = b.split("");
        var resultArray = [];

        while(aSplitToSingleDigitNumbers.length + bSplitToSingleDigitNumbers.length > 0){
            intermediarySum = this.getLastEntryOrZero(aSplitToSingleDigitNumbers) +
                                this.getLastEntryOrZero(bSplitToSingleDigitNumbers) +
                                overhead;
            
            rest = intermediarySum % 10;
            overhead = intermediarySum > 9 ? 1 : 0;
            resultArray.push(rest.toString());
        }
        if(overhead > 0){
            resultArray.push(overhead.toString());
        }
        return resultArray.reverse().join("") ;
    }

    public static getLastEntryOrZero(stringarray) : number{
      return Number(stringarray.pop() || 0)
    }
}

