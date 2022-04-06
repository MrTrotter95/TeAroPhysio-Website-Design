
/* Function to Toggle the Navbar into desktop mode.
the 'active' class will be added to navLinks and display the desktop view at 1000px. check CSS line 102.*/
function toggleNav() {
    const navLinks = document.getElementsByClassName('nav__links')[0]
    navLinks.classList.toggle('active')
}


// onclick function to allow the user to sign up with form validation
function signedUp() {
    var fNameField = document.getElementsByClassName('sign-up__fName')[0].value;
    var emailField = document.getElementsByClassName('sign-up__email')[0].value;
    var passField = document.getElementsByClassName('sign-up__pass')[0].value;

    if(fNameField == '' || emailField == '' || passField == ''){
        alert("Please fill out the required fields and complete the form.");
    } else {
        console.log(fNameField, emailField, passField)
        alert("You have succesfully signed up. You may now sign in.");
    }
}


// onclick function to allow the user to login with form validation
function login() {
    var email = document.getElementsByClassName('loginEmail')[0].value;
    var pass = document.getElementsByClassName('loginPass')[0].value;

    if(email == '' || pass == ''){
        alert("Please make sure your information is correct.");
    } else {
        alert("You have have succesfully signed in");
    }
}


// onclick function to allow the user to show available appointments
function showBooking() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if(endDate < startDate || startDate == "" || endDate == ""){
        alert("end date must be equal to or greater than start date")
    } else {
        const slots = document.getElementById("upcomingSlots");

        slots.innerHTML = `
        <div class="appointment">
        <p class="p2 text-center appDate">`+startDate+`</p>
        <p class="p2 text-center appTime">9:30am</p>
        <p class="p2 text-center practitioner">Practitioner name</p>
        </div>
        <div class="appointment">
        <p class="p2 text-center appDate">`+startDate+`</p>
        <p class="p2 text-center appTime">11:30am</p>
        <p class="p2 text-center practitioner">Practitioner name</p>
        </div>
        <div class="appointment">
        <p class="p2 text-center appDate">`+endDate+`</p>
        <p class="p2 text-center appTime">5:00pm</p>
        <p class="p2 text-center practitioner">Practitioner name</p>
        </div>
        <div class="appointment">
        <p class="p2 text-center appDate">`+endDate+`</p>
        <p class="p2 text-center appTime">1:30pm</p>
        <p class="p2 text-center practitioner">Practitioner name</p>
        </div>
        `;
    
        /* This function loops through the appointments and when the container 'appointment' is 
        selected it will apply the 'active' class which will change the color of the selected appointment check css line 760. */
        var upcomingSlots = document.getElementById("upcomingSlots");
        var appointment = upcomingSlots.getElementsByClassName("appointment");
        for (var i = 0; i < appointment.length; i++) {
        appointment[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        });
        }
    }
}


// onclick function to book the appointment
function bookApp(event) {
    var upcomingSlots = document.getElementById("upcomingSlots");
    var appointment = upcomingSlots.getElementsByClassName("appointment");
    var appType = document.getElementById('appointmentType').value;

    /* This wiil loop through the appointments until it finds one that has the class name 'active'. 
    It will then grab the innerhtml and show the user what appointment they have booked */
    for (var i = 0; i < appointment.length; i++) {
        var appDate = document.getElementsByClassName('appDate')[i].innerHTML;
        var appTime = document.getElementsByClassName('appTime')[i].innerHTML;
        var practitoner = document.getElementsByClassName('practitioner')[i].innerHTML;
        if(appointment[i].classList.contains('active')){

            console.log(appType, appDate, appTime, practitoner);
            alert("Your " + appType + " with " + practitoner + " is on the " + appDate + " at " + appTime);
        }
    }
}







