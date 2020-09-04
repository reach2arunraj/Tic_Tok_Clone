import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({ likes, messages, shares }) {
    const [liked,setLiked] = useState(false)

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon
                    fontSize="large"
                    onClick={(e) => setLiked(false)}
                    />
                ):(
                    <FavoriteBorderIcon
                    fontSize="large"
                    onClick={(e) => setLiked(true) }
                    />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>

            <div className="videoSidebar__button">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
