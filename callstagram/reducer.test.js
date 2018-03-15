import reducer from "./reducer";

test("That reducer has default state for empty action", () => {
  expect(reducer(undefined, {})).toEqual({
    items: [],
    layout: {},
    likedItems: []
  });
});

test("That reducer sets layout state", () => {
  const action = { type: "LAYOUT", layout: 123 };
  expect(reducer({}, action).layout).toEqual(123);
});
