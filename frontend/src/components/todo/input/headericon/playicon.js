import React from "react";

export const Playicon = ({
  getCompletedList,
  setShowCountdown,
  countdownActive,
}) => {
  const handlePlayClick = () => {
    if (!countdownActive) {
      const completedList = getCompletedList();
      console.log("Completed List from Playicon:", completedList);
      setShowCountdown(true);
    }
  };
  return (
    <div onClick={handlePlayClick}>
      <svg
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        style={{
          height: "20px",
          width: "20px",
          cursor: "pointer",
        }}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g
            id="Free-Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            {" "}
            <g transform="translate(-821.000000, -378.000000)" id="Group">
              {" "}
              <g transform="translate(819.000000, 376.000000)" id="Shape">
                {" "}
                <circle
                  stroke="#b1a5a5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  cx="12"
                  cy="12"
                  r="9"
                >
                  {" "}
                </circle>{" "}
                <path
                  d="M9.99806947,8.42746827 L15.4902873,11.5658784 C15.730046,11.7028834 15.8133443,12.0083107 15.6763394,12.2480695 C15.6320447,12.3255851 15.5678029,12.3898269 15.4902873,12.4341216 L9.99806947,15.5725317 C9.75831075,15.7095367 9.45288341,15.6262384 9.31587843,15.3864796 C9.27270766,15.3109308 9.25,15.2254236 9.25,15.1384102 L9.25,8.86158984 C9.25,8.58544746 9.47385763,8.36158984 9.75,8.36158984 C9.83701347,8.36158984 9.92252062,8.3842975 9.99806947,8.42746827 Z"
                  fill="#b1a5a5"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};
