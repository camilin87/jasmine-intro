describe("factorial JSON", function(){
    it ("knows how to double", function(){
        var actualFact = factJson().doubleNumber(2);
        expect(actualFact).toBe(4);
    });
});
