const products = require("./products")
// @ponicode
describe("products.fetchProducts", () => {
    test("0", () => {
        let callFunction = () => {
            products.fetchProducts()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("products.fetchDetails", () => {
    test("0", () => {
        let callFunction = () => {
            products.fetchDetails(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            products.fetchDetails("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            products.fetchDetails("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            products.fetchDetails(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            products.fetchDetails(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            products.fetchDetails(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("products.fetchIsFeatured", () => {
    test("0", () => {
        let callFunction = () => {
            products.fetchIsFeatured()
        }
    
        expect(callFunction).not.toThrow()
    })
})
