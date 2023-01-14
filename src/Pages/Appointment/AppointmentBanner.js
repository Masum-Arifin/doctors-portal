import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hero min-h-screen"
    >
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:w-[50%] lg:max-w-full max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="card bg-base-100 drop-shadow-2xl lg:mr-32 sm:mt-20 lg:mt-0">
            <div className="card-body">
              <DayPicker mode="single" selected={date} onSelect={setDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
