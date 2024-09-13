import React from "react";

// classe react original

class Test extends React.Component {
  constructor(props) {
    super(props);
    // usando state
    this.state = {
      message: "hello world!",
    };
  }

  componentDidMount() {
    console.log("é executado quando o usuário acessa pela primeira vez");
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
