/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const shortWord = word1.length > word2.length ? word2 : word1;
    const longWord = word1.length > word2.length ? word1 : word2;
    
    let mergedString = [];
    for (let i=0; i<=shortWord.length-1; i++) {
        mergedString.push(word1[i]);
        mergedString.push(word2[i]);
    }
   
   mergedString.push(longWord.slice(shortWord.length));
    
    return mergedString.join('');
    
};