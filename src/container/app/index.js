import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppDuc } from './duc';
import { createStructuredSelector } from 'reselect';

@connect(
    createStructuredSelector({
        root: AppDuc.selectors.root,
    }),
    dispatch => ({})
)
class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to React Boilerplate</h1>
                {this.props.root.app.container}
            </div>
        );
    }
}

export default App;
