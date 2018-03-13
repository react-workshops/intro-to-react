import React from "react";
import store from "./store";

const getFullStore = s => ({ store: s });

const connect = (Component, getStateFromStore = getFullStore) => {
  class SubscribedComponent extends React.Component {
    state = { storeState: getStateFromStore(store.getState(), this.props) };

    componentDidMount() {
      store.subscribe(() =>
        this.setState({
          storeState: getStateFromStore(store.getState(), this.props)
        })
      );
    }

    render() {
      return <Component {...this.state.storeState} />;
    }
  }

  return SubscribedComponent;
};

export default connect;
