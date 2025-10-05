function highlight() {
    let text = document.querySelectorAll("strong");

    text.forEach((elem) => {
        elem.style.color = "green";
    });
}



function return_normal() {
    //Write your code here
let normaltext = document.querySelectorAll("strong");
    normaltext.forEach((elem) => {
        elem.style.color = "black"; 
    });
    
}
