import React from "react";

export default WrappedComponent => {
  class NewComponent extends React.Component {
    state = {
      userOptions: []
    };
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          userOptions: [{ label: "user1", id: 1 }, { label: "user2", id: 2 }]
        });
      }, 1000);
    }

    render() {
      return <WrappedComponent data={this.state.userOptions} {...this.props} />;
    }
  }
  return NewComponent;
};
