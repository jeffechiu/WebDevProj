function search(){
    
    var input = document.getElementById("myInput");
    var entries = document.getElementsByClassName("directoryEntry");
    var entities = document.getElementsByClassName("entity");
    var chosenType = ["directoryEntry", "directoryEntryPeople", "directoryEntryNonprofit", "directoryEntryBusiness"]


    if (input.value == ""){

        for (var i = 0; i < entities.length; i++) {
            if (entities[i].classList[entities[i].classList.length-1] == "entityActive"){
                for (var j = 0; j < entries.length; j++){
                    if (i == 0 || entries[j].classList[entries[j].classList.length-1] == chosenType[i]){
                        entries[j].style.display = "flex";
                    }
                }
            }
            
        }
        return;
    }
    var filter = input.value.toUpperCase();
    
   
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].style.display != "none"){
            a = entries[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
    
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              entries[i].style.display = "flex";
            } else {
              entries[i].style.display = "none";
            }

        }
      
      }
    return;
}

function search2(){
    
    var input = document.getElementById("myInput2");
    var entries = document.getElementsByClassName("directoryEntry");
    var entities = document.getElementsByClassName("entity");
    var chosenType = ["directoryEntry", "directoryEntryPeople", "directoryEntryNonprofit", "directoryEntryBusiness"]


    if (input.value == ""){

        for (var i = 0; i < entities.length; i++) {
            if (entities[i].classList[entities[i].classList.length-1] == "entityActive"){
                for (var j = 0; j < entries.length; j++){
                    if (i == 0 || entries[j].classList[entries[j].classList.length-1] == chosenType[i]){
                        entries[j].style.display = "flex";
                    }
                }
            }
            
        }
        return;
    }
    var filter = input.value.toUpperCase();
    
   
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].style.display != "none"){
            a = entries[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
    
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              entries[i].style.display = "flex";
            } else {
              entries[i].style.display = "none";
            }

        }
      
      }
    return;
}

function filterEntities(id){
    // window.onclick = e => {
        
    //     console.log(e.target);  // to get the element
    //     console.log(e.target.tagName);  // to get the element tag name alone
    // }

    var entries = document.getElementsByClassName("directoryEntry");
    for (var j = 0; j < entries.length; j++) {
        entries[j].style.display = "flex";
    }


    var entities = document.getElementsByClassName("entity");

    for (var i = 0; i < entities.length; i++){
        entities[i].classList.remove("entityActive");
    }

    var chosenType = ["directoryEntry", "directoryEntryPeople", "directoryEntryNonprofit", "directoryEntryBusiness"]
    for (var i = 0; i < entities.length; i++){
        if (entities[i].id == id){
            entities[i].classList.add("entityActive");
            
            // console.log(entries[0].classList[entries[0].classList.length-1] == "directoryEntryNonprfit");
            for (var j = 0; j < entries.length; j++) {
                
                    if ( i == 0 || entries[j].classList[entries[j].classList.length-1] == chosenType[i]){
                        entries[j].style.display = "flex";
                    } else {
                        entries[j].style.display = "none";
                    }

              
                
          
            }

        }
    }

    return;
}

function filterEntities2(id){
    console.log(id);
    // window.onclick = e => {
        
    //     console.log(e.target);  // to get the element
    //     console.log(e.target.tagName);  // to get the element tag name alone
    // }

    var entries = document.getElementsByClassName("directoryEntry");
    for (var j = 0; j < entries.length; j++) {
        entries[j].style.display = "flex";
    }


    var entities = document.getElementsByClassName("entity2");

    for (var i = 0; i < entities.length; i++){
        entities[i].classList.remove("entityActive");
    }

    var chosenTypeDict = {"directoryEntry": "entityAll", "directoryEntryPeople":"entityPeople", "directoryEntryNonprofit":"entityNonprofits", "directoryEntryBusiness":"entityBusinesses"}
    
    for (var i = 0; i < entities.length; i++){
        if (entities[i].id == id){
            entities[i].classList.add("entityActive");
            if (id == "entityPeople"){
                entities[0].textContent = "People";
                entities[0].id = "dropdownMenuButton entityPeople";
                console.log(entities[0].id)

                entities[1].textContent = "All";
                entities[1].id = "entityAll";

                entities[2].textContent = "Non-Profits";
                entities[2].id = "entityNonprofits";

                entities[3].textContent = "Businesses";
                entities[3].id = "entityBusinesses";
             } else if (id == "entityNonprofits"){

                entities[0].textContent = "Non-profits";
                entities[0].id = "dropdownMenuButton entityNonprofits";

                entities[1].textContent = "All";
                entities[1].id = "entityAll";

                entities[2].textContent = "People";
                entities[2].id = "entityPeople";

                entities[3].textContent = "Businesses";
                entities[3].id = "entityBusinesses";

             } else if (id == "entityBusinesses"){

                entities[0].textContent = "Businesses";
                entities[0].id = "dropdownMenuButton entityBusinesses";

                entities[1].textContent = "All";
                entities[1].id = "entityAll";

                entities[2].textContent = "People";
                entities[2].id = "entityPeople";

                entities[3].textContent = "Non-profits";
                entities[3].id = "entityNonprofits";

             } else {

                entities[0].textContent = "All";
                entities[0].id = "dropdownMenuButton entityAll"

                entities[1].textContent = "People";
                entities[1].id = "entityPeople";

                entities[2].textContent = "Businesses";
                entities[2].id = "entityBusinesses";

                entities[3].textContent = "Non-profits";
                entities[3].id = "entityNonprofits";

             }
            
            // console.log(entries[0].classList[entries[0].classList.length-1] == "directoryEntryNonprfit");
            for (var j = 0; j < entries.length; j++) {
                
                    if (id.includes("entityAll") || id.includes(chosenTypeDict[entries[j].classList[entries[j].classList.length-1]])){
                        entries[j].style.display = "flex";
                    } else {
                        entries[j].style.display = "none";
                    }
          
            }

        }
    }

    return;
}