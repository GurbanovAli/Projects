import React, { Component } from 'react';

export default class CanvasSizeTool extends Component {
    render () {
        const canvasSizes = [32, 64, 128];
        return (
            <div className="canvas-size">
                <div className="label">Canvas size:</div>
                {canvasSizes.map(size => (
                    <button
                        key={size}
                        className={`action-btn canvas-size-button ${size === this.props.canvasSize ? 'current' : ''}`}
                        onClick={() => this.props.changeCanvasSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        );
    }
}
