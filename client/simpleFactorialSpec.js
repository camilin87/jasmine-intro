describe("simple factorial", function(){

    it ("for 0 is 1", function(){
        expect(fact(0)).toBe(1);
    });

    it ("for 1 is 1", function(){
        expect(fact(1)).toBe(1);
    });

    it ("for 2 is 2", function(){
        expect(fact(2)).toBe(2);
    });

    it ("for 3 is 6", function(){
        expect(fact(3)).toBe(6);
    });

    it ("for 10 is 3,628,800", function(){
        expect(fact(10)).toBe(3628800);
    });
});
