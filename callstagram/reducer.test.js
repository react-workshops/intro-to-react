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

test("Like items", () => {
  const toggleLikeAction = { type: "TOGGLE_LIKE", id: "foo" };
  const state0 = reducer(
    {
      items: [{ id: "foo" }],
      likedItems: [],
      layout: {}
    },
    toggleLikeAction
  );
  expect(state0.likedItems[0]).toEqual("foo");
  const state1 = reducer(state0, toggleLikeAction);
  expect(state1.likedItems.length).toEqual(0);
});
