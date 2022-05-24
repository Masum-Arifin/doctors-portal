import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section style={{ background:`url(${appointment})`}} 
    className="flex justify-center items-center mt-44">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        {/* <h3 className="text-3xl text-primary py-3">Appointment</h3> */}
        {/* <h2 className="text-2xl text-white py-3">Make an Appointment Today</h2> */}
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, corrupti.
          Nihil laboriosam ullam <br /> harum porro quos, quia veniam saepe corrupti
          Nihil laboriosam ullam harum porro <br /> quos, quia veniam saepe corrupti
          Nihil laboriosam ullam harum porro quos, <br /> quia veniam saepe corrupti
          iure unde doloremque perferendis mollitia excepturi eveniet totam.
          Quis, at?
        </p>
        <div className="mt-8">
        <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
