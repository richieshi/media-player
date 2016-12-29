import React from 'react';
import FontAwesome from 'react-fontawesome';

class MusicListItem extends React.Component {

    render() {
       
        let { title, isPlaying } = this.props;
        let playingIcon;
        if ( isPlaying ) {
            playingIcon = <FontAwesome className='play-icon' name='music' size='lg' />
        }

        return (
            <div className='music-item'>
                {playingIcon}
                <span className='music-title'>{title}</span>
            </div>
        );
    }
}

MusicListItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    isPlaying: React.PropTypes.bool.isRequired
}

export default MusicListItem;