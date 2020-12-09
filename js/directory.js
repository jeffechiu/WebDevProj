// function to search for directory members for laptop and tablet
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
                        if (i == 0){

                            if (!entries[j].classList.contains("de2")){
                                entries[j].style.display = "flex";

                            } else {
                                entries[j].style.display = "none";
                            }

                        } else {

                            entries[j].style.display = "flex";

                        }
                        
                    }
                }
            }
            
        }
        return;
    }
    var filter = input.value.toUpperCase();
    
    res = 0;
    for (var i = 0; i < entities.length; i++) {
        if (entities[i].classList[entities[i].classList.length-1] == "entityActive"){
            res = i;
        }
    }
   
    for (var i = 0; i < entries.length; i++) {
        if (res == 0){

            a = entries[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
    
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              entries[i].style.display = "flex";
            } else {
              entries[i].style.display = "none";
            }

        } else if (entries[i].style.display != "none"){
            a = entries[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
    
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              entries[i].style.display = "flex";
            } else {
              entries[i].style.display = "none";
            }

        } else{}
      
      }
    return;
}

// function to search for directory members on phone
function search2(){
    
    var input = document.getElementById("myInput2");
    var entries = document.getElementsByClassName("directoryEntry");
    var entities = document.getElementsByClassName("entity2");
    var chosenType = ["directoryEntry", "directoryEntryPeople", "directoryEntryNonprofit", "directoryEntryBusiness"]
    var chosenTypeDict = {"entityAll": "directoryEntry", "entityPeople":"directoryEntryPeople", "entityNonprofits":"directoryEntryNonprofit", "entityBusinesses":"directoryEntryBusiness"}

    if (input.value == ""){

        for (var j = 0; j < entries.length; j++){
            if (entities[0].id.split(" ")[1] == "entityAll" || entries[j].classList[entries[j].classList.length-1] == chosenTypeDict[entities[0].id.split(" ")[1]]){
                if (entities[0].id.split(" ")[1] == "entityAll"){

                    if (!entries[j].classList.contains("de2")){
                        entries[j].style.display = "flex";

                    } else {
                        entries[j].style.display = "none";
                    }

                } else {

                    entries[j].style.display = "flex";

                }
            } 

        }

        // for (var i = 0; i < entities.length; i++) {
        //     console.log(entities[0].id.split(" ")[1])
        //     if (entities[i].id[1] == "entityBusinesses"){
        //         console.log("wfweww")
        //         for (var j = 0; j < entries.length; j++){
        //             if (entries[j].classList[entries[j].classList.length-1] == chosenTypeDict["entityBusinesses"]){
        //                 entries[j].style.display = "flex";
        //             } 
        //         }
        //     }
            
        // }

       

        // entities[0].textContent = "All";
        // entities[0].id = "dropdownMenuButton entityAll"

        // entities[1].textContent = "People";
        // entities[1].id = "entityPeople";

        // entities[2].textContent = "Businesses";
        // entities[2].id = "entityBusinesses";

        // entities[3].textContent = "Non-profits";
        // entities[3].id = "entityNonprofits";


        return;
    }
    var filter = input.value.toUpperCase();
    
   
    for (var i = 0; i < entries.length; i++) {

        if (entities[0].id.split(" ")[1] == "entityAll" ){
            a = entries[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
    
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              entries[i].style.display = "flex";
            } else {
              entries[i].style.display = "none";
            }

        } else if (entries[i].style.display != "none"){
            a = entries[i].getElementsByClassName("card-title")[0];
            txtValue = a.textContent || a.innerText;
    
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              entries[i].style.display = "flex";
            } else {
              entries[i].style.display = "none";
            }

        } else {}
      
      }
    return;
}

// function to filter directory members based on the 4 tabs (all, person, business, nonprofit)
// for laptop and tablet
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

                        if (i == 0){
                            if (entries[j].classList.contains("de2")){
                                entries[j].style.display = "none"
                            } else {
                                entries[j].style.display = "flex"
                            }
                        } else {

                            entries[j].style.display = "flex";

                        }
                       
                        
                        
                    } else {
                        entries[j].style.display = "none";
                    }

              
                
          
            }

        }
    }

    return;
}

// function to filter directory members based on the 4 tabs (all, person, business, nonprofit)
// for phone 
function filterEntities2(id){

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
                        // entries[j].style.display = "flex";

                        if (id.includes("entityAll")){
                            if (entries[j].classList.contains("de2")){
                                entries[j].style.display = "none"
                            } else {
                                entries[j].style.display = "flex"
                            }
                        } else {

                            entries[j].style.display = "flex";

                        }


                    } else {
                        entries[j].style.display = "none";
                    }
          
            }

        }
    }

    return;
}


function showFirstPage(){

    var entries = document.getElementsByClassName("directoryEntry");
    for (var j = 0; j < entries.length; j++) {
        if (entries[j].className.includes("de2")){
            entries[j].style.display = "none";

        } else {
            entries[j].style.display = "flex";
        }
    }
    return;

}

function showSecondPage(){
    
    var entries = document.getElementsByClassName("directoryEntry");
    for (var j = 0; j < entries.length; j++) {
        if (entries[j].className.includes("de2")){
            entries[j].style.display = "flex";

        } else {
            entries[j].style.display = "none";
        }
    }
    return;

}