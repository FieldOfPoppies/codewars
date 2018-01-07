export class G964 {            
    
    static multiplyArrays(firstArray: Array<number>, secondArray: Array<number>, min : number, max: number): Array<number> {
        let result = new Array<number>();
        let product : number;
        for(var i = 0; i<firstArray.length; i++){
            for(var k = 0; k < secondArray.length; k++){
                product = firstArray[i]*secondArray[k];
                if(product < min || product > max) break;
                if(result.indexOf(product) < 0)
                    result.push(product);
            }
        }
        return result.sort((a,b) => a - b);
    }
    
    static isPrime(primeCandidate: number): boolean {
        for(var i = 2; i < primeCandidate; i++)
            if(primeCandidate % i === 0) return false;
            
        return primeCandidate != 1;
    }    

    static getPrimes(lowerBoundary: number, upperBoundary: number): Array<number> {
        const result = new Array<number>();
        for(var i = lowerBoundary + 1; i<=upperBoundary; i++){
            if(this.isPrime(i))
                result.push(i);
        }
        return result;
    }

    public static countKprimes = (k, start, nd)  => {
        let primes = G964.getPrimes(0,nd / 2);
        let resultList = primes;
        let result : number;
        let lowerlimit = start / primes[primes.length-1];
        for(let i = 1; i < k; i++){
            resultList = G964.multiplyArrays(resultList,primes,lowerlimit,nd).filter(
                (element) => element >= lowerlimit && element <= nd);
        }
        return resultList.filter((element) => element >= start && element <=nd);
    }

    public static puzzle = (s)  => {
        // you code
    }
}