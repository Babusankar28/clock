const TimeCard = ({ time, name }) => {
  time = time < 10 ? `0${time}` : time;
  return (
    <div className="card">
      <h2>{time}</h2>
      <p>{name}</p>
    </div>
  );
};

export default TimeCard;
