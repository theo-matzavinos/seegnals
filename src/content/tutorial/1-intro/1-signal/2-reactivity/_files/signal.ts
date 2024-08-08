import {} from "./context";

export function signal<T>(initialValue: T) {
  let value = initialValue;

  function result() {
    return value;
  }

  result.set = function (v: T) {
    value = v;
  };

  return result;
}
