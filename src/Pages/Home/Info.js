import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Location"
        bgClass="bg-[#3a4256]"
        img={phone}
      ></InfoCard>
      {/* <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard> */}
    </div>
  );
};

export default Info;
