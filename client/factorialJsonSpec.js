describe("factorial JSON", function(){
    it ("knows how to double", function(){
        var actualFact = factJson().doubleNumber(2);
        expect(actualFact).toBe(4);
    });

    it ("calculates json factorial", function(){
        var expectedFactorial = "seeded factorial";
        spyOn($, "get").andCallFake(function(url, callback){
            if (url == "https://murmuring-ravine-8545.herokuapp.com/?n=500"){
                callback(expectedFactorial);
            }
        });

        var actualCalculatedFact = null;
        factJson($).fact(500, function(calculatedFact){
            actualCalculatedFact = calculatedFact;
        });

        expect(actualCalculatedFact).toBe(expectedFactorial);
    });
});
