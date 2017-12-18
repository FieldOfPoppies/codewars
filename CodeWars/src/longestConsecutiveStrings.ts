export class G964 {
    public static longestConsec(strarr : string[], k) {
        var result = ""
        var temp = "";
        for(var i = 0; i<=strarr.length-k;i++){            
            for(var j = 0; j<k;j++){
                temp += strarr[i+j];
            }
            result = temp.length > result.length ? temp : result;            
            temp = "";
        }
        return result;
    }
}