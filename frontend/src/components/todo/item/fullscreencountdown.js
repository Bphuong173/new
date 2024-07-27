import React, { useState, useEffect } from "react";
import "./timercountdown.css";
import TimerBackGround from "./image/timer-bg.jpeg";
import TimerStart from "./image/timer-start-fullscr.png";
import { Action } from "./action/action";
import RedPromo from "../input/headericon/image/redPromo.png";
import { v4 as uuidv4 } from "uuid";
import { MusicModal } from "./musicmodal";
import MusicIcon from "./image/music-icon.png";
const tracks = [
  {
    id: 1,
    name: "Acoustic Breeze",
    src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
  },
  {
    id: 2,
    name: "Sunny",
    src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
  },
  {
    id: 3,
    name: "Creative Minds",
    src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
  },
];
export const Fullscreencountdown = ({
  onCountdownEnd,
  setCountdownActive,
  onClose,
  setIsEditing,
  deleteTodo,
  todo,
  clockCompleted,
}) => {
  const initialTime = 2500;
  const [time, setTime] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showContinueReset, setShowContinueReset] = useState(false);

  const [selectedTrack, setSelectedTrack] = useState(null);
  const [showMusicModal, setShowMusicModal] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive && time < initialTime) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        const calculatedPercentage = ((time + 1) / initialTime) * 100;
        setPercentage(calculatedPercentage);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, initialTime, isActive]);

  const handleSelectTrack = (track) => {
    setSelectedTrack(track);
    setShowMusicModal(false); // Close modal after selecting track
    if (isActive) {
      const newAudio = new Audio(track.src);
      setAudio(newAudio);
      newAudio.play();
      setIsMusicPlaying(true);
    }
  };
  const toggleMusicModal = () => {
    setShowMusicModal(!showMusicModal);
  };
  const startCountdown = () => {
    setCountdownActive(true); // Đặt countdown là đang hoạt động
    setIsActive(true); // Đặt trạng thái đếm ngược là đang hoạt động

    // Kiểm tra và phát nhạc nếu có track âm nhạc được chọn và đang tạm ngưng
    if (audio) {
      if (audio.paused) {
        audio.play(); // Tiếp tục phát nhạc nếu nhạc đang bị tạm ngưng
        setIsMusicPlaying(true); // Đặt trạng thái nhạc đang phát là true
      }
    }
  };

  const pauseCountdown = () => {
    setCountdownActive(false);
    setIsActive(false);
    setShowContinueReset(true);
    if (audio) {
      audio.pause();
      setIsMusicPlaying(false);
    }
  };

  const resetCountdown = () => {
    setTime(0);
    setPercentage(0);
    setIsActive(false);
    setCountdownActive(false);
    setShowContinueReset(false);
  };

  const formatTime = (seconds) => {
    if (seconds < 60) {
      return String(seconds);
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes)}:${String(remainingSeconds).padStart(2, "0")}`;
    }
  };
  useEffect(() => {
    if (selectedTrack) {
      const newAudio = new Audio(selectedTrack.src);
      setAudio(newAudio);
    }
  }, [selectedTrack]);
  useEffect(() => {
    if (time === initialTime) {
      console.log("Countdown ended");
      onCountdownEnd();
      setCountdownActive(false);
      onClose();
    }
  }, [time, initialTime, onCountdownEnd, onClose, setCountdownActive]);
  const conicGradientStyle = {
    background: `conic-gradient(red ${percentage}%, rgba(255,255,255,0.2) 0%)`,
  };
  return (
    <div className="h-full w-full">
      <div className="w-[616px] flex flex-col justify-between h-full p-2 my-0 mx-auto">
        <div>
          <div className="w-[440px] h-[48px] rounded-lg bg-[#fff] flex items-center translate-x-[62px] ">
            <div className="">
              <Action
                deleteTodo={deleteTodo}
                todo={todo}
                setIsEditing={setIsEditing}
              />
            </div>
            <div className="pl-[10px]">
              <div>{todo.task}</div>
              <div className="flex ">
                {clockCompleted.map((index) => (
                  <img
                    src={RedPromo}
                    alt="icon"
                    key={uuidv4()}
                    style={{
                      height: "18px",
                      width: "18px",
                      margin: "2px",
                      borderRadius: "10px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className="bg-center bg-cover flex items-center justify-center  relative w-[400px] h-[400px] rounded-full left-[35%] top-[5%] translate-x-[-120px]"
            style={conicGradientStyle}
          >
            <div
              style={{ backgroundImage: `url(${TimerBackGround})` }}
              className="bg-center w-[390px] h-[390px] rounded-full relative "
            ></div>
            <div className="font-light text-[90px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center absolute inset-0 flex items-center justify-center">
              {formatTime(time)}
            </div>
          </div>
          <div className="w-[440px] h-11 translate-x-[180px] pt-[40px]">
            {isActive ? (
              <div className="w-1 text-[#09280F] min-w-[220px] h-11 leading-[44px] bg-[#fff] rounded-[22px] overflow-hidden my-0 mx-2 flex items-center cursor-pointer text-[16px]">
                <p
                  onClick={pauseCountdown}
                  className="w-1 pr-[18px] min-w-[220px] h-11 leading-[44px] bg-[#fff] rounded-[22px] overflow-hidden my-0 mx-2 flex items-center justify-center cursor-pointer"
                >
                  Tạm ngưng
                </p>
              </div>
            ) : showContinueReset ? (
              <div className="w-[300px] flex transform translate-x[-36px] ">
                <p
                  onClick={() => {
                    setIsActive(true);
                    setShowContinueReset(false);
                    if (audio && audio.paused) {
                      audio.play();
                      setIsMusicPlaying(true);
                    }
                  }}
                  className="w-[130px] text-[#09280F] text-[16px]  bg-white h-11 rounded-[22px] flex items-center justify-center"
                >
                  Tiếp tục
                </p>
                <p
                  onClick={resetCountdown}
                  className="w-[130px] ml-[60px] text-[#09280F] text-[16px] bg-white h-11 rounded-[22px] flex items-center justify-center"
                >
                  Reset
                </p>
              </div>
            ) : (
              <div
                onClick={startCountdown}
                className="w-1 text-[#09280F] min-w-[220px] h-11 leading-[44px] bg-[#fff] rounded-[22px] overflow-hidden my-0 mx-2 flex items-center cursor-pointer text-[16px]"
              >
                <img
                  className="h-[21px] w-[18px]  ml-6  bg-[26px] mr-2"
                  src={TimerStart}
                  alt="Timer Start"
                />
                Bắt đầu Tập trung
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center flex-col h-[62px] mb-[30px]">
          <img
            src={MusicIcon}
            alt="Music Icon"
            onClick={toggleMusicModal}
            className="h-[60px] w-[60px]"
          />
          <p className="text-[#a4a4ad] text-[14px]">
            Tiếng Động Giúp Tập Trung
          </p>
        </div>
        {showMusicModal && (
          <MusicModal
            tracks={tracks}
            onSelectTrack={handleSelectTrack}
            onClose={toggleMusicModal}
          />
        )}
      </div>
    </div>
  );
};
