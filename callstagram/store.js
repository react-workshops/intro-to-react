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

const persistConfig = {
  key: `${Date.now()}`,
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
