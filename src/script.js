
var dist_list = {
    "bra" : {
        name: "Багануур",
        committee : {}
    },
    "bgh" : {
        name: "Багахангай",
        committee : {}
    },
    "bgl" : {
        name: "Баянгол",
        committee : {}
    },
    "bzr" : {
        name: "Баянзүрх",
        committee : {}
    },
    "nal" : {
        name: "Налайх",
        committee : {}
    },
    "son" : {
        name: "Сонгинохайрхан",
        committee : {}
    },
    "suh" : {
        name: "Сүхбаатар",
        committee : {}
    },
    "han" : {
        name: "Хан-Уул",
        committee : {}
    },
    "chg" : {
        name: "Чингэлтэй",
        committee : {}
    },
}

for(var key in dist_list) {
    if(key === "bra") {
        for (var i = 1 ; i <= 20 ; i ++){
            dist_list[key].committee[i] = i + " хороо";
        }
    }
    if(key === "bzr") {
        for (var i = 1 ; i <= 28 ; i ++){
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[29] = "41 хороо";
        dist_list[key].committee[30] = "43 хороо";
    }
    if(key === "han"){
        for (var i = 1 ; i <= 24 ; i++){
            dist_list[key].committee[i] = i + " хороо";
        }
    }
    if(key === "bgl"){
        for (var i = 1 ; i <= 26 ; i++){
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[27] = "28 хороо";
        dist_list[key].committee[28] = "33 хороо";
        dist_list[key].committee[29] = "37 хороо";
    }
    if(key === "suh"){
        for (var i = 1 ; i <= 20 ; i++){
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[21] = "25 хороо";
    }
    if(key === "son"){
        for (var i = 1 ; i <= 29 ; i++){
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[30] = "31 хороо";
        dist_list[key].committee[31] = "32 хороо";
        dist_list[key].committee[32] = "37 хороо";
    }
    if(key === "chg"){
        for (var i = 1 ; i <= 19 ; i++){
            dist_list[key].committee[i] = i + " хороо";
        }
    }
    if(key === "nal"){
        for (var i = 1 ; i <= 20 ; i++){
            dist_list[key].committee[i] = i + " хороо";
        }   
    }
    if(key === "bgh"){
        for (var i = 1 ; i <= 20 ; i++){
            dist_list[key].committee[i] = i + " хороо";
        }   
    }
}


var dist_sel = document.getElementById("district");

for (var key in dist_list) {
    var option = document.createElement("option");
    option.value = key;
    option.text = dist_list[key].name;
    dist_sel.appendChild(option);
}

var com_sel = document.getElementById("committee");

dist_sel.addEventListener("change", function() {
    var selected = this.value;
    com_sel.innerHTML = "";
    for (var key in dist_list[selected].committee) {
        var option = document.createElement("option");
        option.value = key;
        option.text = dist_list[selected].committee[key];
        com_sel.appendChild(option);
    }
});

for (var key in dist_list[com_sel.value].committee) {
    var option = document.createElement("option");
    option.value = key;
    option.text = dist_list[com_sel.value].committee[key];
    com_sel.appendChild(option);
}

function validateForm() {
    var district = document.getElementById("district").value;
    var committee = document.getElementById("committee").value;
    var appartment = document.getElementById("appartment").value;
    var room = document.getElementById("room").value;
    const error = document.getElementById('formErrors');
    const Err = document.createElement('p');
    Err.classList.add('error');
    error.innerHTML = ''; 

    if (district === "") {
        Err.textContent = 'District must be filled out.';
        error.appendChild(Err);
        return false;
        
    }else Err.textContent = "";

    if (committee === "") {
        Err.textContent = 'Committee must be filled out.';
        error.appendChild(Err);
        return false;
    }else Err.textContent = "";

    if (appartment === "") {
        Err.textContent = 'Appartment must be filled out.';
        error.appendChild(Err);
        return false;
    }else Err.textContent = "";
    

    if (room === "") {
        Err.textContent = 'Room must be filled out.';
        error.appendChild(Err);
        return false;
    }else Err.textContent = "";

    alert("You have successfully submitted!");
    return true;
}



