import { React, Component } from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to React Boilerplate</h1>
            </div>
        );
    }
}

React.render(<App />, document.getElementById('app'));
