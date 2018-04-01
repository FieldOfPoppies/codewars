export function saveMark(c1: string, c2: string): string {
    // Don't be daunted! You can do this. Believe in yourself.
    const separateGeoLocationsC1 : string[] = c1.split(',',2);
    const separateGeoLocationsC2 : string[] = c2.split(',',2);
    const radius : number = 3390;
    const result = haversine(
        radius,
        parseFloatFromGeoLocation(separateGeoLocationsC1[0]),
        parseFloatFromGeoLocation(separateGeoLocationsC1[1]),
        parseFloatFromGeoLocation(separateGeoLocationsC2[0]),
        parseFloatFromGeoLocation(separateGeoLocationsC2[1])
    )
    return result.toString() + 'KM';
  }

export function haversine(radius: number, latOne: number, longOne: number, latTwo: number, longTwo: number): number{
    
    const distanceLongitute = toRadian(longTwo - longOne);
    const distanceLatitude = toRadian(latTwo - latOne);
    latOne = toRadian(latOne);
    latTwo = toRadian(latTwo);
    const a = 
        haverPart(distanceLatitude) +
        haverPart(distanceLongitute) *
        Math.cos(latOne) *
        Math.cos(latTwo);
    const c = Math.asin(Math.sqrt(a));
    return roundDown(Math.abs((radius * 2 * c)));
}

function haverPart(input: number):number {
    return Math.pow(Math.sin(input / 2), 2);
}

export function toRadian(value: number){
    const radianFactor = 0.0174533;
    return value * radianFactor;
}

export function roundDown(input: number){
    return input - input % 10;
}

export function parseFloatFromGeoLocation(location: string){
    let result = parseFloat(location);
    return location[location.length-1] === ('W') || location[location.length-1] ===('S') ? 
        result * -1 :
        result;    
}