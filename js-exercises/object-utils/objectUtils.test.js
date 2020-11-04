import { map, filter, invert, merge, all, some } from './objectUtils';

// write your own test cases

describe('Object Utils', () => {
  it('Should returned transformed key value', () => {

  	const mapData = {
  		a: 10,
  		b: 11,
  		c: 12
  	}
    expect(map(mapData, ([key, val]) => [key.toUpperCase(), val * 10])).toEqual({A: 100, B: 110, C: 120});
  });

  it('Filters on the basis of key value', () => {

  	const filterData = {
  		name: 'hi',
  		sname: 'hello',
  		c: 12
  	}
    expect(filter(filterData, ([key, val]) => key === 'name')).toEqual({name: 'hi'});
  });

  it('Invert the Key Value Part', () => {

  	const invertData = {
  		name: 'hi',
  		sname: 'hello',
  		c: '12'
  	}
    expect(invert(invertData, ([key, val]) => [val, key])).toEqual({'hi': 'name', 'hello': 'sname', '12': 'c'});
  });
});