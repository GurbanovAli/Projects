import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { SHORTCUTS_KEYS } from '../constants/shortcuts';

import '../../scss/shortcuts.scss';

const shortcutsNames = {
    [SHORTCUTS_KEYS.pen]: 'Pen tool',
    [SHORTCUTS_KEYS.colorPicker]: 'Color picker',
    [SHORTCUTS_KEYS.lineTool]: 'Line tool',
    [SHORTCUTS_KEYS.squareTool]: 'Square tool',
    [SHORTCUTS_KEYS.eraserTool]: 'Eraser tool',
    [SHORTCUTS_KEYS.bucketTool]: 'Bucket tool'
};

ReactModal.setAppElement('#root');

class ShortcutsChangeModal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            shortcuts: props.shortcuts,
            edit: null
        };

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.editShortcut = this.editShortcut.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown (event) {
        if (!this.state.edit === undefined) {
            return;
        }
        this.setState(state => {
            const shortcuts = {};
            Object.keys(state.shortcuts).forEach(keyCode => {
                const value = state.shortcuts[keyCode];

                if (state.edit === value) {
                    const alreadyUsed = !!state.shortcuts[event.keyCode];
                    // skip setting when key used in another tool
                    if (alreadyUsed) {
                        shortcuts[keyCode] = value;
                    }

                    shortcuts[event.keyCode] = value;
                    return;
                }

                shortcuts[keyCode] = value;
            });

            return { shortcuts, edit: null };
        });
    }

    handleCloseModal () {
        this.editShortcut(null);
        this.props.handleCloseModal(false, this.state.shortcuts);
    }

    editShortcut (shortcut) {
        this.setState({ edit: shortcut });
    }

    render () {
        const { isOpen } = this.props;
        const { shortcuts, edit } = this.state;

        return (
            <ReactModal
                className="shortcuts-change"
                isOpen={isOpen}
                contentLabel="Shortcuts"
                style={{
                    overlay: {
                        backgroundColor: 'black',
                        zIndex: 9999
                    },
                    content: {
                        backgroundColor: 'white'
                    }
                }}
            >
                <button onClick={this.handleCloseModal}>Close</button>
                {Object.keys(shortcuts).map(keyCode => (
                    <div
                        key={shortcuts[keyCode]}
                        className="tool-row"
                        onClick={() => this.editShortcut(shortcuts[keyCode])}
                    >
                        <div
                            className={`key-to-change ${shortcuts[keyCode] === edit ? 'edit' : ''}`}
                        >
                            {String.fromCharCode(keyCode)}
                        </div>
                        <div className="tool-name">{shortcutsNames[shortcuts[keyCode]]}</div>
                    </div>
                ))}
            </ReactModal>
        );
    }
}

export default ShortcutsChangeModal;
