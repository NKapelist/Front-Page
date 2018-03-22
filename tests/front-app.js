describe("Test group for front-app", function() {
    it("should return a second pow", function(){
        expect(Math.pow(2,2)).toBe(4);
    })
    it("should return integer", function(){
        expect(Math.floor(4.5)).toBe(4);
    })
    it("should return integer", function(){
        expect(Math.floor(5.99)).toBe(5);
    })
    it("should return an integer", function(){
        expect(Math.round(3.49)).toBe(3);
    })
    it("should return an integer", function(){
        expect(Math.round(3.50)).toBe(4);
    })
})

describe("String tests", function(){
    it("should change letter", function(){
        expect("Vlad".replace(/a/g, "o")).toBe("Vlod");
    })
    it("should not to be", function(){
        expect("Itea".indexOf("w")).not.toBe(1);
    })
})