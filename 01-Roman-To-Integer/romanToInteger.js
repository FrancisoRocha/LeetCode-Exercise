/**
 * @param {string} s
 * @return {number}
 */

/*
* Dada una cadena de número romano s, conviértala a un número entero.

!Restricciones

! - `1 <= s.length <= 15`
! - `s` contiene solo los caracteres `'I'`, `'V'`, `'X'`, `'L'`, `'C'`, `'D'` y `'M'`
! - Se garantiza que `s` es un número romano válido
! - El valor entero está en el rango `[1, 3999]`

? Example:

? Input: s = "MCMXCIV"
? Output: 1994

*/

var romanToInt = function (s) {

    const valueRomaNums = {
        'I': 1,
        'X': 10,
        'V': 5,
        'C': 100,
        'L': 50,
        'M': 1000,
        'D': 500,
    }

    let resultNumsRoman = 0;

    for (let i = 0; i < s.length; i++) {
        if(valueRomaNums[s[i]] < valueRomaNums[s[i + 1]]){
            resultNumsRoman -= valueRomaNums[s[i]]
        }else{
            resultNumsRoman += valueRomaNums[s[i]]
        }
        
    }
    return resultNumsRoman;
};

romanToInt('IV')

