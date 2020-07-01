window.onload=()=>{
    const contact= document.getElementById("contact") ;
    contact.addEventListener("input", function (event) {
        if (contact.validity.patternMismatch) {
            contact.setCustomValidity("Please enter 10 digit mobile number");
        }
    });
}