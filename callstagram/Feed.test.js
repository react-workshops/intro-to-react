import React from "react";
import Feed from "./Feed";
import reducer from "./reducer";

import { createStore } from "redux";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";

it("renders loading state", () => {
  const store = createStore(reducer);
  const rendered = renderer
    .create(
      <Provider store={store}>
        <Feed />
      </Provider>
    )
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

it("renders with delivered images", () => {
  const store = createStore(reducer);
  store.dispatch({
    type: "DOGGIE_DELIVERY",
    images: [{ key: "asdf", image: "http://imageURL" }]
  });
  const rendered = renderer
    .create(
      <Provider store={store}>
        <Feed store={store} />
      </Provider>
    )
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
