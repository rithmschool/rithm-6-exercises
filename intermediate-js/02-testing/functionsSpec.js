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
    describe("boolean", function(){
        it("it should take an array", function(){
            expect(typeof expand([1, 2, 3], 3)).toEqual('object')
        })
        it("should return a new array", function(){
            expect(expand([1, 2, 3], 3)).toBe([1,2,3,1,2,3,1,2,3])
            expect(expand(["foo", "test"], 1)).toBe(["foo","test"])
            expect(expand(["foo", 1], 2)).toBe(["foo",1,"foo",1])
        })
    })
})