var factJson = function(jquery){
    return {
        doubleNumber: doubleNumber,
        fact: fact
    };

    function doubleNumber(n){
        return n * 2;
    };

    function fact(n, callback){
        jquery.get("https://murmuring-ravine-8545.herokuapp.com/?n=500", function(data){
            callback(data)
        });
    };
};
