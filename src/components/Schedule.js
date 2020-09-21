import React from 'react';

const Schedule = ({schedule, deleteSchedule}) => {

    const {patient, family, date, time, symptoms} = schedule
    return (
        <div className="cita">
            <p>Person: <span>{patient}</span></p>
            <p>Family Member: <span>{family}</span></p>
            <p>date: <span>{date}</span></p>
            <p>time: <span>{time}</span></p>
            <p>Symptoms: <span>{symptoms}</span></p>

            <button
            className="button eliminar u-full-width"
            onClick={() => deleteSchedule(schedule.id)}
            >Delete &times;</button>
        </div>
    )
}

export default Schedule;
