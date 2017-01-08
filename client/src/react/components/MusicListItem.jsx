import React from 'react';
import FontAwesome from 'react-fontawesome';

class MusicListItem extends React.Component {

    render() {
       
        let { song, isPlaying } = this.props;
        let playingIcon;
        if ( isPlaying ) {
            playingIcon = <FontAwesome className='play-icon' name='music' size='lg' />
        }

        return (
            <div className='music-item'>
                {playingIcon}
                <span className='music-title'>{song.video_id}</span>
            </div>
        );
    }
}

MusicListItem.propTypes = {
    song: React.PropTypes.object.isRequired,
    isPlaying: React.PropTypes.bool.isRequired
}

export default MusicListItem;