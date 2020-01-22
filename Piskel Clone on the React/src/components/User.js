import React, { Component } from 'react';

import { signOut, getAuthUser, onSignIn } from './Google';

import '../scss/user.scss';

export default class User extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: null,
            email: null
        };

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignOut = this.onSignOut.bind(this);
    }

    componentDidMount () {
        this.setLoggedUser();
    }

    setLoggedUser () {
        getAuthUser().then((user) => {
            const { displayName, email } = user;

            this.setState({ user: displayName, email });
        }).catch(err => console.warn(err));
    }

    onSignIn () {
        onSignIn()
            .then((result) => {
                const { displayName: user, email } = result.user;

                this.setState({ user, email });
            })
            .catch(err => console.warn(err));
    }

    onSignOut () {
        signOut()
            .then(() => {
                this.setState({ user: null, email: null });
            });
    }

    render () {
        return (
            <div className="user-list">
                {!this.state.user && (
                    <button onClick={this.onSignIn}>Sign in</button>
                )}
                {this.state.user && (
                    <button onClick={this.onSignOut}>Sign out</button>
                )}
                {this.state.user && (
                    <div className="user-data">Name: {this.state.user}</div>
                )}
                {this.state.user && (
                    <div className="user-data">Email: {this.state.email}</div>
                )}
            </div>
        );
    }
}
