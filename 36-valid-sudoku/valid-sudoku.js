/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
        if(board.length !== 9) return false;
    
    let m=0;
    let columnMap = new Map();
    let boxes = Array.from({length:9}, () =>new Set());
    
    while(m<board.length) {        
        let rowSet = new Set();
        row = board[m];
        for (let i=0; i<row.length; i++) {
            if(rowSet.has(row[i]) || row[i]>9 || row[i]<1) return false;
            if(columnMap.get(i) && columnMap.get(i).includes(row[i])) return false            
            let boxIndex = Math.floor(m/3)*3 + Math.floor(i/3);
            if(boxes[boxIndex].has(row[i])) return false;
            
            if(row[i]>=1 && row[i]<=9) {
                rowSet.add(row[i]);
                columnMap.set(i, [...(columnMap.get(i) ?? []), row[i]]);
                boxes[boxIndex].add(row[i]);
            }
            
        }
        m++;
        console.log(columnMap);
    }
    
    return true; 
};