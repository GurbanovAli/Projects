import React, { Component } from 'react';

import AnimPreview from './AnimPreview';
import CanvasSizeTool from './CanvasSizeTool';
import DownloadTools from './DownloadTools';
import Layers from './Layers';

export default class RightTools extends Component {
    render () {
        return (
            <div className="right-side-tools">
                <AnimPreview />
                <DownloadTools />
                <button
                    className="action-btn change-shortcut"
                    onClick={this.props.openShortcutEdit}>
                    Change shortcut
                </button>
                <Layers
                    layers={this.props.layers}
                    activeLayer={this.props.activeLayer}
                    addNewLayer={this.props.addNewLayer.bind(this)}
                    deleteLayer={this.props.deleteLayer.bind(this)}
                    setActiveLayer={this.props.setActiveLayer.bind(this)}
                    setNewLayerName={this.props.setNewLayerName.bind(this)}
                />
                <CanvasSizeTool
                    canvasSize={this.props.canvasSize}
                    changeCanvasSize={this.props.changeCanvasSize} />
            </div>
        );
    }
}
