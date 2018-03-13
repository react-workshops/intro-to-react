import React from "react";
import Code from "./components/Code";
import Card from "./components/Card";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ScrollScreen from "./components/ScrollScreen";

import { Image, View, Text, Button } from "react-native";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ADD":
      return state + action.value;
    default:
      return state;
  }
};

const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };
const unknownAction = { type: "UNKNOWN" };

// console.log(counterReducer(undefined, {}));

const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    subscribe,
    getState,
    dispatch
  };
};

const addSomething = value => ({ type: "ADD", value });

const store = createStore(counterReducer, undefined);
store.dispatch({ type: "UNKNOWN" });

class Counter extends React.Component {
  state = { counter: store.getState() };

  componentDidMount() {
    store.subscribe(() => this.setState({ counter: store.getState() }));
    store.dispatch({ type: "UNKNOWN" });
  }

  handleButtonPress = () => {
    store.dispatch(decrementAction);
  };

  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Button onPress={this.handleButtonPress} title="decrement" />
      </View>
    );
  }
}

const connect = (Component, getStateFromStore) => {
  class SubscribedComponent extends React.Component {
    state = { storeState: getStateFromStore(store.getState()) };

    componentDidMount() {
      store.subscribe(() =>
        this.setState({ storeState: getStateFromStore(store.getState()) })
      );
    }

    render() {
      return <Component {...this.state.storeState} />;
    }
  }

  return SubscribedComponent;
};

class AnotherCounterWithCount extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>{String(this.props.isOdd)}</Text>
      </View>
    );
  }
}
const AnotherCounter = connect(AnotherCounterWithCount, storeState => ({
  isOdd: !!(storeState % 2)
}));

export default class DataManagement extends React.Component {
  static routeName = "DataManagement";

  static chapterOptions = {
    title: "Data management",
    subtitle: "Getting external data to our application"
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollScreen title="Data management" navigation={navigation}>
        <Card>
          <Title>Data management problems</Title>
          <Paragraph>
            As your application grows, your code might start looking like this:
          </Paragraph>
          <Code
            code={`
<FeedItem
  user={this.props.user}
  onUserClick={this.props.onUserClick}
  isLiked={this.props.isLiked}
  onLikeClick={this.props.onLikeClick}
  deleteItem={this.props.onDeleteItem}
  item={this.props.item}
  evenMoreProps={this.props.evenMoreProps}
/>
            `}
          />
          <Paragraph>
            This could be still ok, but now you want your FeedItem component to
            change some state that affects completely different part of your
            app. And if FeedItem is not directly connected or not in the same
            branch in the tree you need to pass the function callback to the
            parent that is in the branch with that component.
          </Paragraph>

          <Image
            source={{
              uri:
                "https://user-images.githubusercontent.com/3802023/37345438-31b77e76-268a-11e8-9c76-646450a398c8.png"
            }}
            style={{ alignSelf: "center", width: 400, height: 300 }}
          />
          <Paragraph>
            Image credit: https://css-tricks.com/learning-react-redux
          </Paragraph>
        </Card>

        <Card>
          <Title>Reducer functions</Title>
          <Paragraph>1. Simple reducer function</Paragraph>
          <Code
            code={`
const reducer = (state, action) => { 
  if (action.type === 'INCREMENT') {
    return state + 1; 
  } else {
    return state; 
  }
}
          `}
          />

          <Paragraph>2. Increment action</Paragraph>
          <Code
            code={`
const incrementAction = { type: 'INCREMENT' };
const unknownAction = { type: 'UNKNOWN' };
            `}
          />

          <Paragraph>3. Using switch statement</Paragraph>
          <Code
            code={`
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};
            `}
          />
        </Card>

        <Card>
          <Title>Store</Title>

          <Code
            code={`
const createStore = reducer => {
  let state = 0;
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
  };
  return {
    getState,
    dispatch
  };
};         
          `}
          />

          <Paragraph>
            In createStore() we used pattern called "Factory Pattern". The
            Factory Pattern provides a closure for variables declared inside the
            factory function. That makes our `state` a private variable, only
            functions inside createStore() have access to it.
          </Paragraph>
        </Card>

        <Card>
          <Title>Example of using our store with reducer functions</Title>

          <Code
            code={`
const store = createStore(reducer);
const incrementAction = {
  type: "INCREMENT"
};
store.dispatch(incrementAction);
console.log(store.getState());
          `}
          />

          <Paragraph>Let's try to increment and decrement by N</Paragraph>
        </Card>

        <Card>
          <Title>Redux</Title>
          <Paragraph>
            Redux is a predictable state container for JavaScript apps.
          </Paragraph>

          <Paragraph>
            Above we implemented ourselves the ideas that Redux uses to manage
            data. Our code is not far off the one that is used in Redux library.
            Let's recap on key ideas of Redux:
          </Paragraph>
          <Paragraph>
            - all of the application state is held in the store (single private
            variable - state)
          </Paragraph>
          <Paragraph>
            - app reads the state from the store (to access the state we use
            getState())
          </Paragraph>
          <Paragraph>- the state cannot be mutated outside the store</Paragraph>
          <Paragraph>
            - views emit actions (to send these actions to the store we use
            dispatch())
          </Paragraph>
          <Paragraph>
            - new state is created by combining the old state and the action
            that we called on the reducer
          </Paragraph>
          <Paragraph>
            - reducers must be pure functions (no side effects)
          </Paragraph>
        </Card>

        <Card>
          <Title>Pure function</Title>

          <Paragraph>
            - returns always the same value given the same set of arguments
          </Paragraph>
          <Paragraph>
            - no side effects (doesn't mutate variables external to the function
            or doing any "work" outside the function)
          </Paragraph>
        </Card>

        <Card>
          <Title>Subscribe to store</Title>

          <Paragraph>
            We are missing an important feature in our store. Currently the
            store has methods for the view to dispatch actions and read the
            current state.
          </Paragraph>

          <Paragraph>
            The view can read the state at any point with getState(), but it
            also needs to know when the state has changed.
          </Paragraph>

          <Paragraph>
            1. Let's define an array of listeners at the top of our
            createStore()
          </Paragraph>
          <Paragraph>
            2. Add subscribe() method to createStore() that adds a new lstener
            to our listeners array
          </Paragraph>
          <Paragraph>
            3. When the state is changed call each listener function
          </Paragraph>

          <Code
            code={`
const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    subscribe,
    getState,
    dispatch
  };
};
            `}
          />
        </Card>

        <Card>
          <Title>Let's try out our new store</Title>

          <Code
            code={`
const store = createStore(reducer, initialState);
const listener = () => (console.log("I'm listening:", store.getState()));
store.subscribe(listener);
store.dispatch(incrementAction);
            `}
          />

          <Paragraph>Using it in React component:</Paragraph>
          <Code
            code={`
const store = createStore(reducer, 0);

class Counter extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
};
            `}
          />
        </Card>

        <Card>
          <Counter />

          <AnotherCounter />
        </Card>
      </ScrollScreen>
    );
  }
}
