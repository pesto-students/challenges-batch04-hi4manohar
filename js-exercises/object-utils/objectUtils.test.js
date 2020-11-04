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
    expect(invert(invertData)).toEqual({'hi': 'name', 'hello': 'sname', '12': 'c'});
  });

  it('Merge Objects', () => {

    const obj = {
      name: 'hi',
      sname: 'hello',
      c: '12'
    };
    const obj2 = {
      name: 'hi',
      sname: 'hello',
      c: '12'
    };
    const obj3 = {
      name: 'hi',
      sname: 'hello',
      c: '10'
    }
    expect(merge(obj, obj2, obj3)).toEqual({'name' : 'hi', sname: 'hello', c: '10'});
  });

  it('Condition for truthness should should return correct', () => {

    const obj = {name: 'hi',sname: 'hello',c: '12'};
    expect(all(obj, (value) => value.length > 2)).toEqual(false);
    obj.name = 'Rohit';
    obj.c = 'Mehra';
    expect(all(obj, (value) => value.length > 2)).toEqual(true);
  });

  it('For some method atleast one should be true', () => {
    const obj = {name: 'hi',sname: 'hello',c: '12'};
    expect(some(obj, (value) => value.length > 2)).toEqual(true);
    obj.sname = 'd';
    expect(some(obj, (value) => value.length > 2)).toEqual(false);
  });
});