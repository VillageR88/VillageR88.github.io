class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }


    handleZeroing = () => {
        this.setState({
            counter: 0,
        });
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

    componentDidMount() {
        this.timer = setInterval(() => {
            this.forceUpdate();
        }, 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const nowTime = new Date().toLocaleTimeString();
        return (

            <div >

                <h1 style={{
                    fontSize: 40,
                    textShadow: "1px 1px 1px black",
                    color: "white",
                    backgroundColor: "cornflowerblue",
                    padding: "30px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    Hello, React 💪 I'm just messing around. 🐒
                </h1>
                <h2>
                    {nowTime}
                </h2>
                <h1 style={{
                    border: "solid",
                    padding: 10,
                    display: "flex",
                    justifyContent: "end"
                }} id="counter">{this.state.counter}</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <button style={{
                        fontWeight: "bold",
                        textShadow: "1px 1px 1px white",
                        fontSize: 22,
                        backgroundColor: "lightgrey",
                        padding: 20
                    }} type="button" id="zero" onClick={this.handleZeroing}>
                        Zeroing
                    </button>
                    <button style={{
                        fontWeight: "bold",
                        textShadow: "1px 1px 1px white",
                        fontSize: 22,
                        backgroundColor: "lightcoral",
                        padding: 20
                    }} type="button" id="decrement" onClick={this.handleDecrement}>
                        Decrement
                    </button>
                    <button style={{
                        fontWeight: "bold",
                        textShadow: "1px 1px 1px white",
                        fontSize: 22,
                        backgroundColor: "lightgreen",
                        padding: 20
                    }} type="button" id="increment" onClick={this.handleIncrement}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));  