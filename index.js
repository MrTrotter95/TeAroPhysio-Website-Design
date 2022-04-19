
/* Arrow Function to Toggle the Navbar into desktop mode.
the 'active' class will be added to navLinks and display the desktop view at 1000px. check CSS line 102.*/
toggleNav = () => {
    const navLinks = document.querySelector('.nav__links');
    navLinks.classList.toggle('active');
}


// onclick Arrow function to allow the user to sign up with form validation
signedUp = () => {
    let fNameField = document.querySelector('.sign-up__fName').value;
    let emailField = document.querySelector('.sign-up__email').value;
    let passField = document.querySelector('.sign-up__pass').value;

    if(fNameField == '' || emailField == '' || passField == ''){
        alert("Please fill out the required fields and complete the form.");
    } else {
        console.log(fNameField, emailField, passField)
        alert("You have succesfully signed up. You may now sign in.");
    }
}


// onclick Arrow function to allow the user to login with form validation
login = () => {
    let email = document.querySelector('.loginEmail').value;
    let pass = document.querySelector('.loginPass').value;

    if(email == '' || pass == ''){
        alert("Please make sure your information is correct.");
    } else {
        alert("You have have succesfully signed in");
    }
}


// onclick Arrow function to allow the user to show available appointments
showBooking = () => {
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
        let upcomingSlots = document.getElementById("upcomingSlots");
        let appointment = upcomingSlots.getElementsByClassName("appointment");
        for (let i = 0; i < appointment.length; i++) {
        appointment[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        });
        }
    }
}


// onclick Arrow function to book the appointment
 bookApp = (event) => {
    let upcomingSlots = document.getElementById("upcomingSlots");
    let appointment = upcomingSlots.getElementsByClassName("appointment");
    let appType = document.getElementById('appointmentType').value;

    /* This wiil loop through the appointments until it finds one that has the class name 'active'. 
    It will then grab the innerhtml and show the user what appointment they have booked */
    for (let i = 0; i < appointment.length; i++) {
        let appDate = document.getElementsByClassName('appDate')[i].innerHTML;
        let appTime = document.getElementsByClassName('appTime')[i].innerHTML;
        let practitoner = document.getElementsByClassName('practitioner')[i].innerHTML;
        if(appointment[i].classList.contains('active')){

            console.log(appType, appDate, appTime, practitoner);
            alert("Your " + appType + " with " + practitoner + " is on the " + appDate + " at " + appTime);
        }
    }
}






