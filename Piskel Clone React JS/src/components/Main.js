import React, { Component } from 'react';
import { KEY_CODES, SHORTCUTS_KEYS } from './constants/shortcuts';

// Components import
import PenSizeBar from './ToolsBar/PenSizeBar';
import ShortcutsChangeModal from './ToolsBar/ShortcutsChangeModal';
import ToolsBar from './ToolsBar/ToolsBar';
import Frames from './Frames/Frames';
import Workspace from './Workspace/Workspace';
import RightTools from './RightTools/RightTools';
import Canvas from './Canvas/Canvas';

// Tools import
import * as penTool from '../Tools/penTool';
import * as colotPickerTool from '../Tools/colorPickerTool';
import * as lineTool from '../Tools/lineTool';
import * as squareTool from '../Tools/squareTool';
import * as eraserTool from '../Tools/eraserTool';
import * as bucketTool from '../Tools/bucketTool';

// Loading import
import * as frameLoading from '../loading/FramesLoading';
import LayersLoading from '../loading/LayersLoading';

export default class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            frames: [{ number: 0, id: 0, img: [] }], // All frames info
            layers: [],
            activeFrame: 0, // current actve frame
            activeLayer: 0,
            proxyFrame: undefined, // Element under which we want to draw frame skeleton
            canvasSize: 64,
            penSize: 1,

            mouseUpContainer: () => {
            },
            mouseMoveContainer: () => {
            },
            mouseDownContainer: () => {
            },
            activeToolId: 0, // Id of current active tool

            mainColor: { r: 255, g: 0, b: 0 },
            semiColor: { r: 57, g: 73, b: 171 },
            shortcuts: {
                [KEY_CODES.p]: SHORTCUTS_KEYS.pen,
                [KEY_CODES.c]: SHORTCUTS_KEYS.colorPicker,
                [KEY_CODES.l]: SHORTCUTS_KEYS.lineTool,
                [KEY_CODES.s]: SHORTCUTS_KEYS.squareTool,
                [KEY_CODES.e]: SHORTCUTS_KEYS.eraserTool,
                [KEY_CODES.b]: SHORTCUTS_KEYS.bucketTool
            },
            shortcutEdit: false
        };

        this.layersLoading = new LayersLoading();

        this.setActiveFrame = frameLoading.setActiveFrame.bind(this);
        this.addNewFrame = frameLoading.addNewFrame.bind(this, undefined);
        this.deleteFrame = frameLoading.deleteFrame.bind(this);
        this.updateFramePreview = frameLoading.updateFramePreview.bind(this);
        this.setProxyFrame = frameLoading.setProxyFrame.bind(this);
        this.changeFramePos = frameLoading.changeFramePos.bind(this);
        this.dublicateFrame = frameLoading.dublicateFrame.bind(this);
        this.setActiveTool = this.setActiveTool.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.openShortcutEdit = this.openShortcutEdit.bind(this);
        this.changeCanvasSize = this.changeCanvasSize.bind(this);
        this.changePenSize = this.changePenSize.bind(this);
    }

    componentDidMount () {
        this.setActiveTool(0); // Set active tool to pen tool
        this.layersLoading.addNewLayer.bind(this)();

        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    changeCanvasSize (size) {
        this.setState({ canvasSize: size });
    }

    changePenSize (size) {
        this.setState({ penSize: size });
    }

    handleKeyDown (event) {
        const toolId = this.state.shortcuts[event.keyCode];

        if (toolId !== undefined) {
            this.setActiveTool(toolId);
        }
    }

    openShortcutEdit (open, shortcuts) {
        this.setState({ shortcutEdit: open });
        if (!open && shortcuts) {
            this.setState({ shortcuts });
        }
    }

    setTool (tool) {
        // Assign a tools drawing functions to containers functions, which later will be past to canvas,
        this.setState({
            mouseDownContainer: tool.mouseDown,
            mouseMoveContainer: tool.mouseMove,
            mouseUpContainer: tool.mouseUp
        });
    }

    setActiveTool (toolId) {
        switch (toolId) {
            case 0:
                this.setTool(penTool);
                break;
            case 1:
                this.setTool(colotPickerTool);
                break;
            case 2:
                this.setTool(lineTool);
                break;
            case 3:
                this.setTool(squareTool);
                break;
            case 4:
                this.setTool(eraserTool);
                break;
            case 5:
                this.setTool(bucketTool);
                break;
            default:
                break;
        }
        this.setState({ activeToolId: toolId });
    }

    setMainColor (r, g, b) {
        this.setState({ mainColor: { r, g, b } });
    }

    setSemiColor (r, g, b) {
        this.setState({ semiColor: { r, g, b } });
    }

    swapColors () {
        this.setState((state, props) => ({
            mainColor: state.semiColor,
            semiColor: state.mainColor
        }));
    }

    render () {
        return (
            <section>
                <PenSizeBar
                    penSize={this.state.penSize}
                    changePenSize={this.changePenSize}
                />
                <ToolsBar
                    setActiveTool={this.setActiveTool}
                    activeToolId={this.state.activeToolId}
                    mainColor={this.state.mainColor}
                    semiColor={this.state.semiColor}
                    setMainColor={this.setMainColor.bind(this)}
                    setSemiColor={this.setSemiColor.bind(this)}
                    swapColors={this.swapColors.bind(this)}
                />
                <ShortcutsChangeModal
                    isOpen={this.state.shortcutEdit}
                    shortcuts={this.state.shortcuts}
                    handleCloseModal={this.openShortcutEdit}
                />
                <Frames
                    onSetActiveFrame={this.setActiveFrame}
                    activeFrame={this.state.activeFrame}
                    activeLayer={this.state.activeLayer}
                    proxyFrame={this.state.proxyFrame}
                    frames={this.state.frames}
                    onAddNewFrame={this.addNewFrame}
                    onDeleteFrame={this.deleteFrame}
                    onDublicateFrame={this.dublicateFrame}
                    setProxyFrame={this.setProxyFrame}
                    changeFramePos={this.changeFramePos}
                    canvasSize={this.state.canvasSize}
                />
                <Workspace />
                <Canvas
                    onUpdateFramePreview={this.updateFramePreview}
                    onMouseDown={this.state.mouseDownContainer}
                    onMouseMove={this.state.mouseMoveContainer}
                    onMouseUp={this.state.mouseUpContainer}
                    mainColor={this.state.mainColor}
                    penSize={this.state.penSize}
                    semiColor={this.state.semiColor}
                    activeLayer={this.state.activeLayer}
                    setMainColor={this.setMainColor.bind(this)}
                    setSemiColor={this.setSemiColor.bind(this)}
                    canvasSize={this.state.canvasSize}
                />
                <RightTools
                    layers={this.state.layers}
                    activeLayer={this.state.activeLayer}
                    canvasSize={this.state.canvasSize}
                    changeCanvasSize={this.changeCanvasSize}
                    addNewLayer={this.layersLoading.addNewLayer.bind(this)}
                    deleteLayer={this.layersLoading.deleteLayer.bind(this)}
                    setActiveLayer={this.layersLoading.setActiveLayer.bind(this)}
                    setNewLayerName={this.layersLoading.setNewName.bind(this)}
                    openShortcutEdit={() => this.openShortcutEdit(true)}
                />
            </section>
        );
    }
}
