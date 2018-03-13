const createStore = reducer => {
  let state = reducer(undefined, {});
  let listeners = [];
  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    },
    subscribe(handler) {
      listeners = [handler, ...listeners];
      return () => {
        listeners = listeners.filter(h => h !== handler);
      };
    }
  };
};

export default createStore;
