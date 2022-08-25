import App from "./App";
import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

describe("test to App", () => {
  test("should return default ref", () => {
    const { result } = renderHook(() => App(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>,
    });
    expect(result.current.ref).toEqual(null);
  });
 
});
