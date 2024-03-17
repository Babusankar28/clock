import { useState } from "react";
import { BsBrightnessHighFill, BsMoonFill } from "react-icons/bs";
import "./App.css";
import "./Theme.css";
import TimeCard from "./TimeCard";
function App() {
  const [theme, setTheme] = useState(false);
  const [date, setDate] = useState(new Date());
  function changeTheme() {
    if (theme) setTheme(false);
    else setTheme(true);
  }
  setInterval(() => setDate(new Date()), 1000);
  let className = `container center ${theme ? "dark" : "light"}`;
  return (
    <>
      <div className={className}>
        <div className="clock-container">
          <div className="theme-btn">
            <button type="button" onClick={changeTheme} className="center">
              {!theme && <BsMoonFill />}
              {theme && <BsBrightnessHighFill />}
            </button>
          </div>
          <div className="clock ">
            <b className="am">{date.getHours() < 12 ? "AM" : "PM"}</b>
            <div className="timer center">
              <TimeCard
                name="Hours"
                time={
                  date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
                }
              />
              <span>:</span>
              <TimeCard name="Minutes" time={date.getMinutes()} />
              <span>:</span>
              <TimeCard name="Seconds" time={date.getSeconds()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
