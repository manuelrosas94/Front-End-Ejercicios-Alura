// export default checkComplete;

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);

    return i;
}

// Inmediately invoked function expression IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas"); //toggle evalua si la clase existe o no
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

