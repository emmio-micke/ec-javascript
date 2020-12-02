
document.addEventListener("DOMContentLoaded", function() {
    let element = document.getElementById("headline");
    
    element.style.color = "yellow";
    element.classList.add("test-class");
    element.classList.remove("hello");

    let text = element.innerHTML;

//    let answer = prompt("Hej, vad heter du?");

//    alert(`Hej ${answer}`);


    element.innerText = "Lorem <em>ipsum</em>";
});
