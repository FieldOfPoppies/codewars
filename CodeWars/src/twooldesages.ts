// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages){

    
    return (ages.sort((a,b)=>{
        return a>b
    }).slice(ages.length-2));
    
}