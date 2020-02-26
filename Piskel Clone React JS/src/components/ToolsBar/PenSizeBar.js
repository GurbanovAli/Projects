import React, { Component } from 'react';
import size from '../../Assets/icons/square.svg';

export default class PenSizeBar extends Component {
    render () {
        const penSizes = [
            { size: 1, className: 'size-one' },
            { size: 2, className: 'size-two' },
            { size: 3, className: 'size-three' },
            { size: 4, className: 'size-four' }
        ];

        return (
            <div className="pen-size">
                {penSizes.map(pen => (
                    <div
                        key={pen.className}
                        className={`square ${this.props.penSize === pen.size ? 'activeTool' : ''}`}
                        onClick={() => this.props.changePenSize(pen.size)}>
                        <img src={size} className={pen.className} />
                    </div>
                ))}
            </div>
        );
    }
}
