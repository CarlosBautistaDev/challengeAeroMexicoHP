import { store } from "./store";

describe("test to store", () => {
  test("should default state", () => {
    expect(store).toEqual({
      dispatch: expect.any(Function),
      subscribe: expect.any(Function),
      getState: expect.any(Function),
      replaceReducer: expect.any(Function),
      "@@observable": expect.any(Function),
    });
  });
});
