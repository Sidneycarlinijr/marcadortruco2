import { Component } from 'react';

interface Props {
  // Define the props for your component
}

interface State {
  // Define the state for your component
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // Initialize the state for your component
    };
  }

  render() {
    return (
      <div>Oi primeiro commit</div>
    );
  }
}

export default Home;