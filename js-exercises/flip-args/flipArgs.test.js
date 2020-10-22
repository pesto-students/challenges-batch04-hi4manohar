// write your own test cases
import {flipArgs} from './flipArgs';

describe('with Reverse Param to be Called to func', () => {
	test('Function Exist', () => {
		expect(typeof flipArgs).toBe('function');
	});

	test('Should return the reverse param', () => {
		expect(flipArgs('a', 'b', 'c', 'd', 'e')).toEqual(['e', 'd', 'c', 'b', 'a']);
	});
})