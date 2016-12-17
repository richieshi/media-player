import React from 'react';
import YoutubeMusic from './YoutubeMusic.jsx';
import MusicControls from './MusicControls.jsx';
import Actions from '../actions/Actions.js';
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        if (!this.props.isInit) {
            return null;
        }
        return (
            <div id='main-app'>
                <div className='playlist'>
                    <YoutubeMusic />
                </div>
                <div className='controls-container'>
                    <MusicControls />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInit: state.isInit
   };
};

const mapDispatchToStore = (dispatch) => {
    return {
        init: () => {
            dispatch(Actions.init());
        }
    };
}

App = connect(mapStateToProps, mapDispatchToStore)(App);

export default App;
