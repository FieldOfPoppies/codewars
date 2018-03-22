export class G964 {

    public static gap = (g, m, n) => {
        let result: number[] = new Array(2);
        let counter = g + 1;
        for(let i = m; i<=n; i++){
          if(!G964.isPrime(i)){
            counter++;
          } else if(counter !== g){
            result[0] = i;
            counter = 1;
          }else {
            result[1] = i;
            return result;
          }
        }
        return null;
    }
  
    public static isPrime(n){
      for(let i=2;i<n;i++){
        if(n%i === 0) return false;
      }
      return n !== 1;
    }
  }