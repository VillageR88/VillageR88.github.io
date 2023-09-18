var light = "default";
var dark = "twilight";
var customized = "customized";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            nowTime: new Date().toLocaleTimeString(),
        };
    }

    light = () => {
        theme1.textContent = "☀";
        localStorage.setItem('theme1', light);
        document.body.classList.add('enhanced');
        theme1.classList.add('enhanced');
        htmlr.classList.add('enhanced');
    }

    dark = () => {
        theme1.textContent = "☽";
        localStorage.setItem('theme1', dark);
        document.body.classList.remove('enhanced', 'customized');
        theme1.classList.remove('enhanced', 'customized');
        htmlr.classList.remove('enhanced', 'customized');
    }

    customized = () => {
        theme1.textContent = "✰";
        localStorage.setItem('theme1', customized);
        document.body.classList.add('customized');
        theme1.classList.add('customized');
        htmlr.classList.add('customized');
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

    handleTheme = () => {
        const theme = localStorage.getItem("theme1");

        if (theme === dark) {
            this.light();
        } else if (theme === light) {
            this.customized();
        } else if (theme === customized) {
            this.dark();
        }
    };

    handleExit = () => {
        window.location.href = 'index.html';
    };

    componentDidMount() {
        //document.body.style.backgroundColor = 'lightblue';
        this.timer = setInterval(() => {
            this.setState({
                nowTime: new Date().toLocaleTimeString(),
            });
        }, 1000);

        const theme = localStorage.getItem("theme1");

        if (theme === light) {
            this.light();
        } else if (theme === dark) {
            this.dark();
        } else if (theme === customized) {
            this.customized();
        }
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
                        fontSize: 24,
                        //textShadow: "1px 0px 0.1px pink",
                        //color: "black",
                        display: "flex",
                        flex: 4,
                        justifyContent: "center",
                        color: "inherit"
                    }}>
                        Hello, React 💪 I'm just messing around. 🐒
                    </h1>
                    <button style={{
                        marginLeft: "3px"
                    }} type="button" id="theme1" onClick={this.handleTheme}>Theme</button>
                    <button style={{
                        marginRight: "12px"

                    }} type="button" id="htmlr" onClick={this.handleExit}></button>
                </tb>
                <div style={{
                    fontSize: "30px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",

                }} id="counter">{this.state.counter}</div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <button style={{
                        fontWeight: "bold",
                        textShadow: "1px 1px 1px white",
                        fontSize: "18px",
                        backgroundColor: "lightgrey",
                        padding: "10px",
                    }} type="button" id="zero" onClick={this.handleZeroing}>
                        Zeroing
                    </button>
                    <button style={{
                        fontWeight: "bold",
                        textShadow: "1px 1px 1px white",
                        fontSize: "18px",
                        backgroundColor: "lightcoral",
                        padding: "10px",
                    }} type="button" id="decrement" onClick={this.handleDecrement}>
                        Decrement
                    </button>
                    <button style={{
                        fontWeight: "bold",
                        textShadow: "1px 1px 1px white",
                        fontSize: "18px",
                        backgroundColor: "lightgreen",
                        padding: "10px",
                    }} type="button" id="increment" onClick={this.handleIncrement}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));  