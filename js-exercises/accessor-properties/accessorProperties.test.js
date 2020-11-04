import { accessorProperties } from "./accessorProperties";

describe("Template Test", () => {
  test("Template Test", () => {

  	const obj = accessorProperties();
  	obj.number = 3;
    expect(obj.number).toBe(11);
    obj.number = 36;
    expect(obj.number).toBe(100100);
  });
});
