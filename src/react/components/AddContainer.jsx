import React from 'react';

class AddContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            videoId: ''
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        this.setState({
            videoId: event.target.value 
        });
    }

    _onBlur() {
        this.setState({
            videoId: ''
        });
    }
    
    render() {
        let { videoId } = this.state;

        return (
            <div className='add-container'>
                <input
                    type='text'
                    value={videoId}
                    onChange={this._onChange}
                     />
                <button>Add</button>                
                <button>Cancel</button>
            </div>
        );
    }
}

export default AddContainer;