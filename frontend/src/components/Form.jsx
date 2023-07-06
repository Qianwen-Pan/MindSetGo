
import React, { useState } from "react";
//  import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


export default function Form() {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    projectName: "",
    teamNumber: "",
    length: "",
    date: "",
    priority: "",
    moodCheck: false,
    stickyNotes: false,
    envelopeFeedback: false,
    prize: false,
  });
  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));
  }




  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5001/project", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    })
    .then((response) => {
      if (response.ok) {
        navigate("/dashboard", { replace: true });
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    
      <div>
        <Header />
        <div class="box">
          <form class="needs-validation" onSubmit={handleSubmit} noValidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="projectName" class="form-label">Project name</label>
               <input type="text" class="form-control" id="projectName" placeholder="" value={formInput.projectName} onChange={handleChange}  required></input>
                
              </div>

              <div class="col-sm-6">
                <label for="teamNumber" class="form-label">
                Number of Team members
              </label>
              <input
                type="text"
                class="form-control"
                id="teamNumber"
                placeholder=""
                value={formInput.teamNumber}
                onChange={handleChange} 
                required=""
              ></input>
                
              </div>

              <div class="col-12">
                <label for="length" class="form-label">
                Project Length in weeks
              </label>
              <input
                type="text"
                class="form-control"
                id="length"
                required=""
                value={formInput.length}
                onChange={handleChange} 
              ></input>
                
              </div>

              <div class="col-12">
                <label for="date" class="form-label">
                Project Starting Date
              </label>
              <input
                type="date"
                class="form-control"
                id="date"
                required=""
                
                
              ></input>
                
              </div>

              <h4 class="mb-3">Priority</h4>

              <div class="my-3">
                <div class="form-check">
                  <input
                    id="high"
                    name="priority"
                    type="radio"
                    class="form-check-input"
                    required=""
                  ></input>
                  <label class="form-check-label" for="credit">
                    High
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="medium"
                    name="priority"
                    type="radio"
                    class="form-check-input"
                    required=""
                  ></input>
                  <label class="form-check-label" for="debit">
                    Medium
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="low"
                    name="priority"
                    type="radio"
                    class="form-check-input"
                    required=""
                  ></input>
                  <label class="form-check-label" for="paypal">
                    Low
                  </label>
                </div>
              </div>
            </div>

            <hr class="my-4"></hr>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="moodCheck"
                checked={formInput.moodCheck}
                onChange={handleChange}
              ></input>
              <label class="form-check-label" for="mood-check">
                Daily Mood Checkin
              </label>
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="stickyNotes"
                checked={formInput.stickyNotes}
                onChange={handleChange}
              ></input>
              <label class="form-check-label" for="sticky-notes">
                Stickty Notes Wall
              </label>
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="envelopeFeedback"
                checked={formInput.envelopeFeedback}
                onChange={handleChange}
              ></input>
              <label class="form-check-label" for="envelope-feedback">
                Envelope Feedback
              </label>
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="prize"
                checked={formInput.prize}
                onChange={handleChange}
              ></input>
              <label class="form-check-label" for="prize">
                Prize for comleting all the project resources
              </label>
            </div>

            <hr class="my-4"></hr>

            {/* <button class="w-100 btn btn-outline-info btn-lg" type="submit">Create new project</button> */}
            <Button
              // onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#9AC5F4" }}
            >
              Create New Project
            </Button>
          </form>
        </div>
      </div>
    
  );
}
