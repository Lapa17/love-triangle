/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var result = 0;
    for (var i = 0 ;i < preferences.length;i++){
      var first = preferences[i];
      var second = preferences[first-1];
      var third = preferences[second-1];
      if(i== third-1 && preferences[i] !== i+1){
        result++;
        preferences[i] =0;
        preferences[first-1]= 0;
        preferences[second-1]=0;
      }
      
    }
    return result;  
};
