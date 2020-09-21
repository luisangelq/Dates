import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Schedule from "./components/Schedule";

function App() {

  //local storage
  let initialSchedules = JSON.parse(localStorage.getItem("schedules"));
  if(!initialSchedules) {
    initialSchedules = [];
  }

  //dates array
  const [schedules, getSchedules] = useState(initialSchedules);

  useEffect(() => {
    if(initialSchedules) {
      localStorage.setItem("schedules", JSON.stringify(schedules))
    } else {
      localStorage.setItem("schedules", JSON.stringify([]));
    }
  }, [initialSchedules, schedules] )

  //function for add new chedules
  const createSchedule = (schedule) => {
    getSchedules([...schedules, schedule]);
  };

  //Delete funtion
  const deleteSchedule = (id) => {
    const newSchedules = schedules.filter((schedule) => schedule.id !== id);
    getSchedules(newSchedules);
  };

  //conditional message
  const title =
    schedules.length === 0
      ? "There aren't appointments"
      : "Manage your appointments";
  return (
    <Fragment>
      <h1>Patient administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createSchedule={createSchedule} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {schedules.map((schedule) => (
              <Schedule
                key={schedule.id}
                schedule={schedule}
                deleteSchedule={deleteSchedule}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
