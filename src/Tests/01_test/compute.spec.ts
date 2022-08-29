import { compute } from "./compute";

describe("compute", () => {
  it("Can Return 0 When Input Wasn't Nature Number.", () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  /* if you want to see 1 failure, unComment */
  // it("Can Return 0 When Input Is 0.", () => {
  //   const result = compute(0);
  //   expect(result).toBe(0);
  // });
  it("Can Return Input++ (Input + 1) When Input Is Large Then 0 (Input > 0).", () => {
    const result = compute(2);
    expect(result).toBe(3);
  });
})
