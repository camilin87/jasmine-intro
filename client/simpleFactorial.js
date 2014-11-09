var fact = function(n){
    var result = 1;
    for (var i = 2; i <= n; i++){
        result *= i;
    }

    console.log(result);
    return result;
};
