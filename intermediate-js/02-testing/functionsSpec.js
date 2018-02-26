// Write your tests here!
describe("replaceWith", function(){
    describe("string", function(){
        it("should take a string", function(){
            expect(typeof replaceWith('mark','k', 'z')).toEqual('string')
        })
        it("should return an updated string properly", function(){
            expect(replaceWith('mark','k', 'z')).toBe('marz')
            expect(replaceWith('sunny','y', 'z')).toBe('sunnz')
            expect(replaceWith('alex','a', 'k')).toBe('klex')
            expect(replaceWith('awesome','e', 'z')).toBe('awzsomz')
        })
        it("should be case sensative", function(){
            expect(replaceWith('Foo','F', 'B')).toBe('Boo')
            expect(replaceWith('BoB','B', 'Z')).toBe('ZoZ')
            expect(replaceWith('Car','C', 'Z')).toBe('Zar')
        })
    })
})


describe("expand", function(){
    describe("array", function(){
        it("it should return an  object", function(){
            expect(typeof expand([1, 2, 3], 3)).toEqual('object')
        })
        it("should return a new array", function(){
            expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3])
            expect(expand(["foo", "test"], 1)).toEqual(["foo","test"])
            expect(expand(["foo", 1], 2)).toEqual(["foo",1,"foo",1])
        })

        it("passing a second argument that is not a number", function(){
            expect(expand([1, 2, 3], "mark")).toEqual([])
            expect(expand([1, 2, 3], {})).toEqual([])
            expect(expand([1, 2, 3], [])).toEqual([])
        })
    })
})

describe("acceptNumbersOnly", function(){
    describe("boolean",function(){
        it("should return a boolean",function(){
            expect(typeof acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toEqual('boolean')
        })
        it("should test aguments object like structure to see if all values are numbers",function(){
            expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true)
            expect(acceptNumbersOnly(1, "foo")).toBe(false)
            expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false)
        })
    })
})

describe("mergeArrays", function(){
    describe("array", function(){
        it("should return an array", function(){
            expect(Array.isArray(mergeArrays([2, 1], [3, 4]))).toEqual(true)
        })

        it("should return a single array that is sorted", function(){
            expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
            expect(mergeArrays([5,4],[2,3])).toEqual([2,3,4,5])
            expect(mergeArrays([2,1],['marley','bob'])).toEqual([1,2,'bob','marley'])
        })
    })
})

describe("mergeObjects", function(){
    describe("objects", function(){
        it("should return an object", function(){
            expect(typeof mergeObject({name: "Foo",num: 33},{test: "thing",num: 55})).toEqual('object')
        })

        it("should ovrride the value if it exists in the object", function(){
            expect(mergeObject({name: "Foo",num: 33},{test: "thing",num: 55})).toEqual({name: "Foo", num: 55,test: "thing"})
        })
    })
})