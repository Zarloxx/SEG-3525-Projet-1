
// Initialization of the page *(On load)
//window.addEventListener("load", addListeners);

function addListeners(){
    /*--------------------------------------------------------------------------------------------------------------------
    (None) -> (None)
    Set-up EventListeners for HTLM objects
      * register-appointment-data: (btn) Submit an appointment request
      *
    --------------------------------------------------------------------------------------------------------------------*/
    document.getElementById("register-appointment-data").addEventListener("click", registerAppointment());
}

function registerAppointment() {
    /*--------------------------------------------------------------------------------------------------------------------
    (None) -> (None)
    Fetch Appointment Data and diaplay a confirmation of the appointment details
      * services: (str) The type of service chosen by the customer. ex: haircut
      * employee: (str) The desired employee to provide the service. ex: John
      * date:     (str) The desired date at which the service is to be provided. ex: 2022-08-23
      * email:    (str) The email of the customer
      * name:     (str) The name of the customer
    --------------------------------------------------------------------------------------------------------------------*/
    // document.getElementById("myPopup").innerHTML = "<b>votre rendez-vous a été enregistré</b>";
    
    // Set appointment variables
    var service = "";
    var employee= "";
    var date= "";
    var email= "";
    var name= "";

    // Initiate appointment variables
    if (document.getElementById("service-data1").checked) service = "Coupe de Cheveu";
    else if (document.getElementById("service-data2").checked) service = "Teinture de Cheveu";
    else if (document.getElementById("service-data3").checked) service = "Coupe de Barbe";
    else service = "null";
    if (document.getElementById("employee-data1").checked) employee = "John";
    else if (document.getElementById("employee-data2").checked) employee = "Mike";
    else if (document.getElementById("employee-data3").checked) employee = "Brad";
    else employee = "null";
    date = String(document.getElementById("date-data").value);
    email = String(document.getElementById("email-input").value);
    name = String(document.getElementById("name-input").value);

    if (document.getElementById("validation-input").value){
        // Display the appointment details
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "<b>"+name+", votre rendez-vous a été enregistré</b><br>Service: "+service+"<br>Employee: "+employee+"<br>Date: "+date;
        
    }
    
}
