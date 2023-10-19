function validateForm() {
    var district = document.getElementById("district")?.value;
    var committee= document.getElementById("committee")?.value;
    var appartment = document.getElementById("appartment")?.value;
    var room = document.getElementById("room")?.value;

    if (appartment == "") {
        alert("Bair must be filled out");
        return false;
    }


    if( room == "") {
        alert("toot must be filled out");
        return false;
    }
    
    alert("You have successfully registered!");
    
}

