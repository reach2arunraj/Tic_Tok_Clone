import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';

function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }

    }
    return (
        <div className="video">
            <video 
                className="video_player"
                loop
                ref={videoRef}
                onClick={handleVideoPress}
                src="https://v16m.tiktokcdn.com/96e923cd83f59981d2a6dbda7357d02a/5f524bb3/video/tos/useast2a/tos-useast2a-ve-0068c002/be73a082094e47768115c871bfdb865b/?a=1233&br=1856&bt=928&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200904081353010190218201060009A0&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2xkbmZwZDp1czMzOjczM0ApZTc3Zzc5OzxlNzc1Ozk0M2c1MWMtX2cyYGhfLS00MTZzc19eM142MjE2XmA2MGAxXy06Yw%3D%3D&vl=&vr="
            />
            <VideoFooter />
        </div>
    )
}

export default Video
