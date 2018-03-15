const initialState = {
  items: [],
  likedItems: [],
  layout: {}
};

const reducer = (lastState = initialState, action) => {
  if (action.type === "DOGGIE_DELIVERY") {
    return {
      ...lastState,
      items: [...lastState.items, ...action.images]
    };
  }
  if (action.type === "LAYOUT") {
    return {
      ...lastState,
      layout: action.layout
    };
  }
  if (action.type === "TOGGLE_LIKE") {
    const hasLiked = lastState.likedItems.indexOf(action.id) !== -1;
    if (hasLiked) {
      return {
        ...lastState,
        likedItems: lastState.likedItems.filter(i => i !== action.id)
      };
    } else {
      return {
        ...lastState,
        likedItems: [...lastState.likedItems, action.id]
      };
    }
  }
  return lastState;
};

export default reducer;
