import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [formattedTime, setFormattedTime] = useState("00:00:00");

  const updateTimer = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    setFormattedTime(formattedTime);

    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      clearTimeout(timerId);
    }
  };

  const startTimer = () => {
    clearTimeout(timerId);
    setSeconds(Number(inputValue));
  };

  const stopTimer = () => {
    clearTimeout(timerId);
    setSeconds(0);
    setFormattedTime("00:00:00");
  };

  useEffect(() => {
    if (seconds > 0) {
      const id = setTimeout(updateTimer, 1000);
      setTimerId(id);
    } else {
      clearTimeout(timerId);
      setFormattedTime("00:00:00");
    }
    return () => clearTimeout(timerId);
  }, [seconds]);

  return (
    <section className="grid items-center justify-center w-full h-screen bg-gray-900">
      <div className="w-[90%] m-auto flex-col ">
        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            placeholder="Seconds"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.replace(/\D/g, ""))}
            className="p-2 text-lg rounded-md outline-none w-full"
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={startTimer}
              className="p-2 text-lg text-white transition bg-blue-500 border-none rounded-md cursor-pointer hover:bg-blue-900"
            >
              Start
            </button>
            <button
              onClick={stopTimer}
              className="p-2 text-lg text-white transition bg-blue-500 border-none rounded-md cursor-pointer hover:bg-blue-900"
            >
              Stop
            </button>
          </div>
        </div>

        <p className="mt-6 text-lg text-white">{formattedTime}</p>
      </div>
    </section>
  );
};

export default Timer;
