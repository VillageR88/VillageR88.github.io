class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  render() {
    if (this.state.isLiked) {
      return <p>Yes, I Really Like This.</p>;
    }

    return (
      <button onClick={() => this.setState({ isLiked: true })}>
        Like Button
      </button>
    );
  }
}

const domContainer = document.querySelector('#some_random_id');

ReactDOM.render(<MyButton />, domContainer);