import React, {useState } from "react";
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'; 
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {data: services , isLoading, refetch } =useQuery('available', ()=>fetch(`http://localhost:5000/availableAppointments?date=${formattedDate}`)
      .then((res) => res.json()))
  // useEffect(() => {
  //   fetch(`http://localhost:5000/availableAppointments?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then(data => setServices(data));
  // }, [formattedDate]);
  
  return (
    <div>
      <h4 className="text-xl text-center text-secondary my-12">
        {" "}
        Available Appointments on {format(date, "pp")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;



