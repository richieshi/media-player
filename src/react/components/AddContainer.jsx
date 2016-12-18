import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/Actions.js';
import { Key } from '../../constants/Constants.js';

class AddContainer extends React.Component {

    _bind(...handlers) {
        handlers.forEach( handler => this[handler] = this[handler].bind(this));
    }

    constructor() {
        super();
        this.state = {
            videoId: ''
        };
        this._bind(
            '_onKeyDown', '_onAdd', '_onChange',
            '_cancel', '_clearTextbox', '_canAdd'
        );
    }

    _onKeyDown(event) {
        if ( event.keyCode === Key.ENTER) {
            this._onAdd();
        } else if (event.keyCode === Key.ESC) {
            this._cancel();
        }
    }

    _clearTextbox() {
        this.setState({
            videoId: ''
        });
    }

    _onAdd() {
        if (!this._canAdd()) {
            return;
        }
        this.props.onAddSong(this.state.videoId);
        this._clearTextbox();
    }

    _onChange(event) {
        this.setState({
            videoId: event.target.value 
        });
    }

    _cancel() {
        this.refs.addTextbox.blur();
        this._clearTextbox();
    }

    _canAdd() {
        return this.state.videoId.length > 0;
    }
    
    render() {
        let { videoId } = this.state;

        return (
            <div className='add-container'>
                <input
                    ref='addTextbox'
                    type='text'
                    value={videoId}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown} />
                <button onClick={this._onAdd}>Add</button>                
                <button onClick={this._cancel}>Cancel</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddSong: (videoId) => {
            dispatch(Actions.addNewSong(videoId));
        }
    };
};

AddContainer = connect(null, mapDispatchToProps)(AddContainer);

export default AddContainer;