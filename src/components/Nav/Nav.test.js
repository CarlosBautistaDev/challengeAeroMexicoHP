import Nav from "./Nav";
import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("test in Card", () => {
  test("should return default type", () => {
    const { result } = renderHook(() => Nav(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>,
    });
    expect(result.current.type).toEqual("div");
  });
  test("should return default ref", () => {
    const { result } = renderHook(() => Nav(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>,
    });
    expect(result.current.ref).toEqual(null);
  });
  test("should return default key", () => {
    const { result } = renderHook(() => Nav(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>,
    });
    expect(result.current.key).toEqual(null);
  });
  test("should return default props", () => {
    const { result } = renderHook(() => Nav(), {
      wrapper: ({ children }) => <Provider store={store}> {children}</Provider>,
    });
    expect(result.current.props.className).toEqual('navContainer');
  });
});
