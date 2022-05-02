
// Class component
import React, { Component } from 'react';

class PlayerForAnimation extends Component {
    render() {
        const { userName } = this.props.match.params;
        return (
            <div>Username: { userName }</div>
        );
    }
}
export default PlayerForAnimation;
