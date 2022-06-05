import React from 'react';
import { format } from 'date-fns';


const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h4 className='text-xl text-center text-secondary'> Available Appointments on {format(date, 'pp')}</h4>
        </div>
    );
};

export default AvailableAppointments;  