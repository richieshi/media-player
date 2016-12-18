import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/Actions.js';
import { Key } from '../../constants/Constants.js';

class AddContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            videoId: ''
        };
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onAdd = this._onAdd.bind(this);
        this._onChange = this._onChange.bind(this);
        this._cancel = this._cancel.bind(this);
    }

    _onKeyDown(event) {
        if ( event.keyCode === Key.ENTER) {
            this._onAdd();
        } else if (event.keyCode === Key.ESC) {
            this._cancel();
        }
    }

    _onAdd() {
        this.props.onAddSong(this.state.videoId);
        this._cancel();
    }

    _onChange(event) {
        this.setState({
            videoId: event.target.value 
        });
    }

    _cancel() {
        this.refs.addTextbox.blur();
        this.setState({
            videoId: ''
        });
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