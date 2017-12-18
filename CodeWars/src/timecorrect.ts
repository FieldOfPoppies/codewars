export function timeCorrect(timestring:String):String {
    
    
    if(timestring == "" || timestring == null)
    return timestring;

    if(isValidFormat(timestring)){
      
        var parsedSeconds = Number(timestring.substr(6,2));
        var parsedMinutes = Number(timestring.substr(3,2));
        var parsedHours = Number(timestring.substr(0,2));

        var seconds = parsedSeconds % 60;
        parsedMinutes += parsedSeconds > 59 ? 1 : 0;                
        var minutes = parsedMinutes % 60;
        parsedHours += parsedMinutes > 59 ? 1 : 0;
        var hours = parsedHours % 24;     

        timestring = `${hours < 10 ? "0"+hours : hours}:${minutes < 10 ? "0"+minutes : minutes}:${seconds < 10 ? "0"+seconds : seconds}`; 
    } else {
        timestring = null;
    }
    
    return timestring;
  }

  export function isValidFormat(timestring:String){
    var regEx = new RegExp('^[0-9]{2}\:[0-9]{2}\:[0-9]{2}$')
    return timestring.match(regEx) != null;    
  }
