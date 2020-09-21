import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

const Form = ({createSchedule}) => {
  //Create state Dates form
  const [schedule, setSchedule] = useState({
    patient: "",
    family: "",
    date: "",
    time: "",
    symptoms: ""
  });

  //error state form
  const [ error, setError] = useState(false)

  //update function for inputs
  const handleChange = (e) => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value,
    });
  };

  //substract values
  const { patient, family, date, time, symptoms } = schedule;

  //when the user hit button from form
  const submitDate = (e) => {
    e.preventDefault();

    //Validate
    if (
      patient.trim() === "" ||
      family.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true)
      return;
    }
      
    setError(false)
    
    //Assigment id
    schedule.id = uuidv4();

    //Create the date
    createSchedule(schedule);

    //restart form
    setSchedule({
      patient: "",
    family: "",
    date: "",
    time: "",
    symptoms: ""
    })
  };

  return (
    <Fragment>
      <h2>Create Date</h2>

      {error ? <p className="alerta-error">All fields are required</p> : null}

      <form onSubmit={submitDate}>
        <label>Patient Name</label>
        <input
          type="text"
          name="patient"
          className="u-full-width"
          placeholder="Full Name"
          onChange={handleChange}
          value={patient}
        />

        <label>Family member's name</label>
        <input
          type="text"
          name="family"
          className="u-full-width"
          placeholder="Full Name"
          onChange={handleChange}
          value={family}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Add Date
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createSchedule: PropTypes.func.isRequired
}

export default Form;
