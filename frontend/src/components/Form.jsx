import React from "react"
//  import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

 import Header from "./Header";



 export default function Form() {
     return(
         <div>
         <Header />
         <div class ="box">

         <form class="needs-validation" novalidate="">
           <div class="row g-3">
             <div class="col-sm-6">
               <label for="projectName" class="form-label">Project name</label>
               <input type="text" class="form-control" id="projectName" placeholder="" value="" required=""></input>

             </div>

             <div class="col-sm-6">
               <label for="teamNumber" class="form-label">Number of Team members</label>
               <input type="text" class="form-control" id="teamNumber" placeholder="" value="" required=""></input>

             </div>

             <div class="col-12">
               <label for="length" class="form-label">Project Length in weeks</label>
               <input type="text" class="form-control" id="length" required=""></input>
             </div>

             <div class="col-12">
               <label for="date" class="form-label">Project Starting Date</label>
               <input type="date" class="form-control" id="date"  required=""></input>
             </div>


             <h4 class="mb-3">Priority</h4>

             <div class="my-3">
             <div class="form-check">
               <input id="high" name="priority" type="radio" class="form-check-input" required=""></input>
               <label class="form-check-label" for="credit">High</label>
             </div>
             <div class="form-check">
               <input id="medium" name="priority" type="radio" class="form-check-input" required=""></input>
               <label class="form-check-label" for="debit">Medium</label>
             </div>
             <div class="form-check">
               <input id="low" name="priority" type="radio" class="form-check-input" required=""></input>
               <label class="form-check-label" for="paypal">Low</label>
             </div>
           </div>

            </div> 



           <hr class="my-4"></hr>

           <div class="form-check">
             <input type="checkbox" class="form-check-input" id="mood-check"></input>
             <label class="form-check-label" for="mood-check">Daily Mood Checkin</label>
           </div>

           <div class="form-check">
             <input type="checkbox" class="form-check-input" id="sticky-notes"></input>
             <label class="form-check-label" for="sticky-notes">Stickty Notes Wall</label>
           </div>

           <div class="form-check">
             <input type="checkbox" class="form-check-input" id="envelope-feedback"></input>
             <label class="form-check-label" for="envelope-feedback">Envelope Feedback</label>
           </div>

           <div class="form-check">
             <input type="checkbox" class="form-check-input" id="prize"></input>
             <label class="form-check-label" for="prize">Prize for comleting all the project resources</label>
           </div>

           <hr class="my-4"></hr>

           <button class="w-100 btn btn-outline-info btn-lg" type="submit">Create new project</button>
         </form>
      </div>
      </div>
     )
    }