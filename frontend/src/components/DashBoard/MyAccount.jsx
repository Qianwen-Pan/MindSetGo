import React, { useState } from "react";

 import Footer from "../Footer";
 import Form from "../Form";
 import "../../styles.css";

 function MyAccount() {
   //handle popup function
   const[popup, setPop]= useState(false);

   return (
     <div>
       
         <h1>Yours current  projects resources</h1>
         <div>
                                         {popup?
                                         <div className="main">
                                           <div className="popup">

                                             <div>
                                                 <div className="popup-head">
                                                    <img src="smile.png" />
                                                    <h3>You worked so hard, I got some gifts for you!</h3>
                                                 </div>
                                                 <div class="fourImages">
                                                  <div >
                                                   <img  src="pop1.png" height="150px" width= "220px"/>
                                                   <img src="pop2.png" height="150px" width= "220px"/>
                                                  </div>
                                                  <div>
                                                   <img src="pop3.png" class="secondline" height="150px" width= "220px"/>
                                                   <img src="pop4.png" class="secondline" height="150px" width= "220px"/>
                                                  </div>
                                                 </div>

                                                 <button class="btn btn-outline-info btn-sm close" onClick={()=>{
                                                                   setPop(false);
                                                                   }}>Close</button>
                                             </div>
                                           </div>
                                         </div>:""}
                                      </div>
         <div class="container-fluid">
    <div class="row">
     <div class="col-lg-12">
         <div class="card">
             <div class="card-body">


                 <div class="hori-timeline" dir="ltr">
                     <ul class="list-inline events">
                         <li class="list-inline-item event-list">
                             <div class="px-4">

                                 <div class="event-date bg-soft-primary text-primary">2 June</div>
                                 <h5 class="font-size-16">Event One</h5>
                                 <p class="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>

                             </div>
                         </li>
                         <li class="list-inline-item event-list">
                             <div class="px-4">
                                 <div class="event-date bg-soft-success text-success">5 June</div>
                                 <h5 class="font-size-16">Event Two</h5>
                                 <p class="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                                 <div >
                                      <button class="btn btn-light btn-sm" onClick={ () =>{
                                                                                          setPop(!popup);
                                                                                          }}>Read more</button>

                                 </div>
                             </div>
                         </li>
                         <li class="list-inline-item event-list">
                             <div class="px-4">
                                 <div class="event-date bg-soft-danger text-danger">7 June</div>
                                 <h5 class="font-size-16">Event Three</h5>
                                 <p class="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>

                             </div>
                         </li>
                         <li class="list-inline-item event-list">
                             <div class="px-4">
                                 <div class="event-date bg-soft-warning text-warning">8 June</div>
                                 <h5 class="font-size-16">Event Four</h5>
                                 <p class="text-muted">Languages only differ in their pronunciation and their most common words.</p>

                             </div>
                         </li>
                     </ul>
                 </div>
             </div>
         </div>

     </div>
 </div>
 </div>
     </div>
   );
 }

 export default MyAccount; 