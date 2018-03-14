import { createStore } from "redux";

const initialState = {
  items: []
};

const reducer = (lastState = initialState, action) => {
  if (action.type === "DOGGIE_DELIVERY") {
    return {
      items: action.images
        .map(
          i =>
            i && {
              isLiked: false,
              image: i,
              id: i
            }
        )
        .filter(Boolean)
    };
  }
  if (action.type === "TOGGLE_LIKE") {
    const items = [...lastState.items];
    const index = items.findIndex(i => i.id === action.id);
    if (index !== -1) {
      const item = items[index];
      items[index] = {
        ...item,
        isLiked: !item.isLiked
      };
    }
    return {
      items
    };
  }
  return lastState;
};

const store = createStore(reducer);

export default store;
