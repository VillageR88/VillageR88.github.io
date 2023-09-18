class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    handleDecrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }));
    }

    render() {
        return (
            <div>
                <h1 style={{
                    fontSize: 40,
                    textShadow: "1px 1px 1px black",
                    color: "white",
                    backgroundColor: "cornflowerblue",
                    padding: "30px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    Hello, React! I'm just messing around.
                </h1>
                <h1 style={{
                    border: "solid",
                    padding: 10,
                    display: "flex",
                    justifyContent: "end"
                }} id="counter">{this.state.counter}</h1>
                <td style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <button style={{
                        fontWeight: "bold",
                        fontSize: 22,
                        backgroundColor: "lightcoral",
                        padding: 20
                    }} type="button" id="decrement" onClick={this.handleDecrement}>
                        Decrement
                    </button>
                    <button style={{
                        fontWeight: "bold",
                        fontSize: 22,
                        backgroundColor: "lightgreen",
                        padding: 20
                    }} type="button" id="increment" onClick={this.handleIncrement}>
                        Increment
                    </button>
                </td>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);