let text= document.getElementById("email");
let submit = document.getElementById("submit");
let form = document.getElementById("form");

function validation(e){
let email= text.value.trim();
let valid = /^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[a-z]{2,}$/.test(email);
let tooltip= document.getElementById("tooltip");
let image = document.getElementById("error");

if(!valid){
    e.preventDefault();

    /*let error = "images/icon-error.svg";
    error.setAttribute("id", "error");
    form.innerHTML += `<img src="${error}" alt="error"/>`;
    */
    let error= document.createElement("img");
    error.src= "images/icon-error.svg";
    error.setAttribute("id", "error");
    error.alt = "error";
    
    if(!image){
    form.append(error);
    }

    let paragraph = document.createElement("p");
    paragraph.textContent = "Please provide a valid email";
    paragraph.setAttribute("id", "tooltip");

    if(!tooltip){
    form.append(paragraph);
    }
}

    else{

        if (tooltip) {
            form.removeChild(tooltip);
        }
        if (image) {
            form.removeChild(image);
        }


        /*
        if(tooltip && error){
        form.removeChild(tooltip);
        form.removeChild(error);
        } */
    }
   

}



submit.addEventListener("click", function(e){
    validation(e)
}, false);