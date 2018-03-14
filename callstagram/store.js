import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [],
  likedItems: [],
  layout: {}
};

const rootReducer = (lastState = initialState, action) => {
  if (action.type === "DOGGIE_DELIVERY") {
    return {
      ...lastState,
      items: action.images
        .map(
          i =>
            i && {
              image: i,
              key: i
            }
        )
        .filter(Boolean)
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

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export default store;
