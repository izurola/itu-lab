function validateForm() {
    var district = document.getElementById("district").value;
    var committee = document.getElementById("committee").value;
    var appartment = document.getElementById("appartment").value;
    var room = document.getElementById("room").value;

    if (district === "") {
        alert("District must be filled out");
        return false;
    }

    if (committee === "") {
        alert("Committee must be filled out");
        return;
    }

    if (appartment === "") {
        alert("Apartment must be filled out");
        return ;
    }
    

    if (room === "") {
        alert("Room must be filled out");
        return ;
    }
    
    alert("You have successfully registered!");
    return ; // Allow the form to submit
}


