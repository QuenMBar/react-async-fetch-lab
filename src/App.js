import React, { Component } from "react";

class App extends Component {
    state = {
        spacePeople: [],
    };

    render() {
        return (
            <div>
                {this.state.spacePeople.map((dude) => (
                    <h1 key={dude}>{dude.name}</h1>
                ))}
            </div>
        );
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    spacePeople: data.people,
                });
            });
    }
}

export default App;
