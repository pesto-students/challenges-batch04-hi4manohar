import { debounce } from "./debounce";

jest.useFakeTimers();

describe("debounce Test", () => {

    test('should return the correct output', () => {        

        const fnc = function() {

            return 'hi';
        }

        const returnedVal = [];

        let debouncedFn = debounce(() => fnc, 5000);
        
        returnedVal.push( debouncedFn() );
        returnedVal.push( debouncedFn() );
        returnedVal.push( debouncedFn() );
        returnedVal.push( debouncedFn() );
        returnedVal.push( debouncedFn() );
        returnedVal.push( debouncedFn() );
        returnedVal.push( debouncedFn() );

        setTimeout(() => {
            expect(returnedVal.length).toEqual(1);
        }, 5000);
    })
});
