import Card from "./Card";
import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("test in Card", () => {
  test("should return default type", () => {
    const { result } = renderHook(() => Card(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>
    });
        expect(result.current.type).toEqual("div");
  });
  test("should return default ref", () => {
    const { result } = renderHook(() => Card(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>
    });
        expect(result.current.ref).toEqual(null);
  });
  test("should return default key", () => {
    const { result } = renderHook(() => Card(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>
    });
        expect(result.current.key).toEqual(null);
  });
  test("should return default props", () => {
    const { result } = renderHook(() => Card(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>
    });
        expect(result.current.props).toEqual({
      className: "cardContainer",
      children: [],
    });
  });
});
