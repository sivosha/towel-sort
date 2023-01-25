
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || matrix == [])
    {
        return [];
    }
    else{
        for(let i = 1; i<matrix.length; i++) {
            matrix[i].sort(function(a, b) {
                if (i%2) return b-a
                else return a-b;
        })}

        return [].concat.apply([], matrix);
    }
  
}
