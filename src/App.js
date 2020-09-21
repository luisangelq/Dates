import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Schedule from './components/Schedule';


function App() {

  //dates array
  const [schedules, getSchedules] = useState([])

  //function for add new chedules 
  const createSchedule = schedule => {
    getSchedules([
      ...schedules,
      schedule
    ]);
  }

  //Delete funtion
  const deleteSchedule = id => {
    const newSchedules = schedules.filter(schedule => schedule.id !== id );
    getSchedules(newSchedules)
  }
  return (
    <Fragment>
      <h1>Patient administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
            createSchedule={createSchedule}
            />
          </div>
          <div className="one-half column">
            <h2>Manage your appointments</h2>
            {schedules.map(schedule => (
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
