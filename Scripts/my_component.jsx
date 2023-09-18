class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            nowTime: new Date().toLocaleTimeString(),
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
        //document.body.style.backgroundColor = 'lightblue';
        this.timer = setInterval(() => {
            this.setState({
                nowTime: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        //document.body.style.backgroundColor = '';
        clearInterval(this.timer);
    }

    render() {
        const nowTime = new Date().toLocaleTimeString();
        return (

            <div>
                <tb style={{
                    display: "flex",
                    alignItems: "center",

                }}>
                    <h2 style={{
                        display: "flex",
                        justifyContent: "left",
                        marginLeft: "10px",
                        border: "solid",
                        padding: "6px",
                        position: "absolute",
                    }}>
                        {nowTime}
                    </h2>
                    <h1 style={{
                        fontSize: 40,
                        //textShadow: "1px 0px 0.1px pink",
                        color: "black",
                        padding: "10px",
                        display: "flex",
                        flex: 4,
                        justifyContent: "center"
                    }}>
                        Hello, React 💪 I'm just messing around. 🐒
                    </h1>
                </tb>
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

ReactDOM.render(<App />, document.getElementById('root'));  