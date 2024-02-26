import ReactHlsPlayer from 'react-hls-player';
import './Banner.css';
import { useRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiVolumeOff, mdiVolumeHigh } from '@mdi/js';

function Banner(params) {

    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef();

    const handleMuteToggle = () => {
        const ref = videoRef.current;
        if (ref) {
            ref.muted = !ref.muted;
            setIsMuted(!isMuted);
        }


    }

    return (
        <div className='autoplay-banner'>
            <ReactHlsPlayer
                className='video'
                src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                width="100%"
                height="100%"
                controls={false}
                autoPlay
                muted={isMuted}
                playerRef={videoRef}
            />
            <div className='mute-button' onClick={handleMuteToggle}>
                {isMuted ? <Icon path={mdiVolumeOff} size={1} /> : <Icon path={mdiVolumeHigh} size={1} />}
            </div>
        </div>
    );
}

export default Banner;