
// 1. If the input-string (for both methods!) has chars, that are not in the region, 
// throw an Exception(C#, C++, Python) or Error(JavaScript).
// 2. If the input-string is null or empty return exactly this value!

// 1. Change the fifth bit of the char and the first bit of the next char. (C1.5 <==> C2.1, only if there is a next char!)
// 2. Inverse the second and the forth bit of the char.           (2,4 => 0->1 or 1->0)
// 3. Change the first 3 bit against the last 3 bit of the char.  (1,2,3 <==> 4,5,6)
// 4. Change every odd bit against the following bit of the char. (1 <==> 2, 3 <==> 4, 5 <==> 6)
// 5. Reverse the whole line of bits of the char.
// 6. Change the first against the third bit of the char.         (1 <==> 3)


export function encrypt(text:string):string {

}

export function decrypt(encryptedText:string):string {

}