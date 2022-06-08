
// Initialization of the page *(On load)
window.addEventListener("load", addListeners);

function addListeners(){
    /*--------------------------------------------------------------------------------------------------------------------
    (None) -> (None)
    Set-up EventListeners for HTLM objects
      * register-appointment-data: (btn) Submit an appointment request
      *
    --------------------------------------------------------------------------------------------------------------------*/
    document.getElementById("register-appointment-data").addEventListener("click", );
}

function registerAppointment() {
    /*--------------------------------------------------------------------------------------------------------------------
    (None) -> (None)
    Fetch Appointment Data and diaplay a confirmation of the appointment details
      * services: (str) The type of service chosen by the customer. ex: haircut
      * employee: (str) The desired employee to provide the service. ex: John
      * date:     (str) The desired date at which the service is to be provided. ex: 2022-08-23
    --------------------------------------------------------------------------------------------------------------------*/

    // Set appointment variables
    var service; // Service desired for the appointment
    var employee; // Employee with which the appointment is scheduled
    var date; // Date of the appointment

    // Initiate appointment variables
    service = document.getElementById("service-data").value;
    employee = document.getElementById("employee-data").value;
    date = document.getElementById("date-data").value;

    // Display the appointment details
    document.getElementById("appointment-details-display").innerHTML = "Service: "+service+"<br>Employee: "+employee+"<br>Date: "+date;



}
