import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const songs = [
    {
      title: "소나기 (Sudden Shower)",
      artist: "이클립스 (ECLIPSE)",
      audioSrc:
        "./audio/[선재 업고 튀어 (Lovely Runner) OST Part 1] 이클립스 (ECLIPSE) - 소나기 (Sudden Shower) MV.mp3",
      imgSrc: "./img/1.png",
    },
    {
      title: "The Way I Loved You",
      artist: "Taylor Swift",
      audioSrc: "./audio/The Way I Loved You - Taylor Swift.mp3",
      imgSrc: "./img/2.png",
    },
    {
      title: "Forever Star",
      artist: "OST Hidden Love",
      audioSrc: "./audio/Forever Star - OST Hidden Love.mp3",
      imgSrc: "./img/3.png",
    },
    {},
    {
      title: "Can I Have This Dance",
      artist: "High School Musical 3",
      audioSrc: "./audio/Can I Have This Dance - High School Musical 3.mp3",
      imgSrc: "./img/4.png",
    },
  ];

  return (
    <div className="container">
      <AudioPlayer songs={songs} />
      {/* <AudioPlayer audioSrc="./audio/[선재 업고 튀어 (Lovely Runner) OST Part 1] 이클립스 (ECLIPSE) - 소나기 (Sudden Shower) MV.mp3" /> */}
    </div>
  );
}

export default App;
