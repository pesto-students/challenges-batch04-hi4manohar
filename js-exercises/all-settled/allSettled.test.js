import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('The function should return a Promise', () => {
    expect(allSettled() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];
    return expect(allSettled(promises)).resolves.toEqual([
        {status: 'fulfilled'}, 
        {status: 'rejected'}
    ]);
  });
});