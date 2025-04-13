import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ audioSrc }) => {
  // state variables to manage the player´s status and current time
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  // funtion to seek to a specific time in the audio
  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value;
    setCurrentTime(event.target.value);
  };

  // function to update the current time and duration of the audio
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  // function to handle playing the audio
  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  // function to handle pausing the audio
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // function to toggle between play and pause state
  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  // function to format the current time and duration to mm:ss
  function formatDuration(durationSeconsds) {
    const minutes = Math.floor(durationSeconsds / 60);
    const seconds = Math.floor(durationSeconsds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  // useEffect to update the current time and duration when the audio is loaded
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    // clean up function to remove the event listener
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  return (
    <div className="main-container">
      <div className="img">
        <img className="img" src="./img/1.png" alt="" />
      </div>
      <h3 className="title">Sudden Shower - Lovely Runner</h3>
      <div className="player-card">
        <input
          className="progress-bar"
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        {/* The audio element */}
        <audio ref={audioRef} src={audioSrc} />

        {/* Display current and total duration of the track */}
        <div className="track-duration">
          <p>{formatDuration(currentTime)}</p>
          <p>{formatDuration(duration)}</p>
        </div>
      </div>

      <div className="buttons">
        <button>
          <svg
            className="arrow-after
        "
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="33"
            viewBox="0 0 55 33"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.60124 13.2384L21.8863 0.931851C24.7674 -0.757898 27.3204 0.900871 27.2903 3.7569L27.2061 11.7208L46.3154 1.18622C49.192 -0.499573 54.3288 1.19042 54.2986 4.04245L54.0337 29.0954C54.0035 31.9515 48.8322 33.5284 45.9919 31.7861L27.1096 20.845L27.0254 28.8099C26.9952 31.6659 24.4076 33.2701 21.5629 31.5279L2.29881 18.7953C-0.000234587 17.3828 -0.727149 14.602 1.60124 13.2384Z"
              fill="#D8A353"
            />
          </svg>
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? (
            <svg
              className="pause"
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="98"
              viewBox="0 0 102 98"
              fill="none"
            >
              <path
                d="M51.0085 0C79.2238 0 102 21.8867 102 49C102 76.1133 79.2238 98 51.0085 98C44.3089 98.0086 37.6733 96.7471 31.4818 94.2879C25.2902 91.8286 19.6643 88.2199 14.9261 83.6684C10.188 79.1168 6.43073 73.7118 3.86948 67.7629C1.30823 61.8139 -0.00668673 55.4379 2.55691e-05 49C2.55691e-05 21.8867 22.7932 0 51.0085 0ZM38.2606 28.5833V69.4166H46.7592V28.5833H38.2606ZM55.2578 28.5833V69.4166H63.7564V28.5833H55.2578Z"
                fill="#D8A353"
              />
            </svg>
          ) : (
            <svg
              className="play"
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="101"
              viewBox="0 0 104 101"
              fill="none"
            >
              <g clipPath="url(#clip0_1_7)">
                <path
                  d="M52 0C38.2087 0 24.9823 5.32052 15.2304 14.7911C5.47856 24.2617 0 37.1066 0 50.5C0 63.8934 5.47856 76.7383 15.2304 86.2089C24.9823 95.6795 38.2087 101 52 101C65.7913 101 79.0177 95.6795 88.7696 86.2089C98.5214 76.7383 104 63.8934 104 50.5C104 37.1066 98.5214 24.2617 88.7696 14.7911C79.0177 5.32052 65.7913 0 52 0ZM41.928 27.1923C42.4036 27.1744 42.8702 27.3217 43.244 27.608L71.244 48.9733C71.4819 49.1551 71.6743 49.3869 71.8066 49.6514C71.9388 49.9158 72.0075 50.206 72.0075 50.5C72.0075 50.794 71.9388 51.0842 71.8066 51.3486C71.6743 51.6131 71.4819 51.8449 71.244 52.0267L43.244 73.392C42.9485 73.62 42.5927 73.7621 42.2176 73.802C41.8425 73.8419 41.4634 73.7779 41.1242 73.6174C40.785 73.457 40.4994 73.2066 40.3004 72.8952C40.1015 72.5838 39.9974 72.2241 40 71.8576V29.1346C39.9997 28.6314 40.2005 28.1476 40.5601 27.7853C40.9197 27.423 41.4101 27.2104 41.928 27.1923ZM44 33.1358V67.8642L66.764 50.5L44 33.1358Z"
                  fill="#D8A353"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_7">
                  <rect width="104" height="101" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </button>

        <button>
          <svg
            className="arrow-next"
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="32"
            viewBox="0 0 54 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.5972 18.7756L32.4434 31.296C29.5803 33.0161 27.0099 31.3844 27.0099 28.5282V20.5638L8.01292 31.2999C5.15438 33.016 0 31.3804 0 28.5282V3.47385C0 0.617667 5.15438 -1.01383 8.01292 0.698281L27.0099 11.4392V3.47385C27.0099 0.617667 29.5803 -1.01383 32.4434 0.698281L51.8409 13.2264C54.1548 14.6145 54.911 17.3876 52.5972 18.7756Z"
              fill="#D8A353"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
