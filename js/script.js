window.onload=()=>{
    alert("hi")
    document.getElementById('contact').addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
        // var contactno=document.querySelector("contact").value;
        event.target.setCustomValidity("Please enter 10 digit mobile number");
        }
    });
}