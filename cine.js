

const select = document.getElementById("horario_1");
// change the visibility of each element in lista
let asientos = document.getElementsByClassName("asientos_1");
let lista = [...asientos];

select.addEventListener("change", function () {
    // let value = select.options[select.selectedIndex].value;
    lista.forEach(element => {
        element.style.display = "none";
    }); 
    console.log(select.value);
    console.log("asientos" + select.value);
    const selected = document.getElementById("asientos_" + select.value);
    if(selected){
        selected.style.display = "block";
    }
    let asientos  = fetch('http://localhost:8080/sala/0/horario/'+(select.value - 1)+'/asientos')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
});

let comprar_entrada = document.getElementById("comprar_entrada");
comprar_entrada.addEventListener("click", function() {
    const sala = document.getElementById("sala1");
    const asientos = sala.querySelectorAll("#asientos_1");
    const checkboxes = asientos.querySelectorAll("input[type=checkbox]:checked");
    console.log(checkboxes);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    }
    );
    console.log(values);
    return values;
});

const sala = document.querySelectorAll(".asientos_1#asientos_1");
const asientos_1 = [...sala]
// const checkboxes = document.querySelectorAll(".asientos_1 #asientos_1 input[type=checkbox]:checked");
const checkboxes = document.querySelectorAll('div.sala1 div.asientos_1#asientos_1 input[type=checkbox]');
const list_checkboxes = [...checkboxes];

let boxes;

async function fetchBoxes() {
  try {
    const response = await fetch('http://localhost:8080/sala/0/horario/0/asientos');
    const data = await response.json();
    boxes = data;
    console.log(boxes);
  } catch (error) {
    console.error('Error:', error);
  }
}

boxes = fetchBoxes();
console.log(boxes);


//make a function to check the checkboxes if thery are in the boxes array
// console.log(boxes);

list_checkboxes.forEach( (element, index) => {
    element.checked = false;
    element.disabled = false;
    console.log(index);
    if(boxes[index].estado == 'disponible'){
        element.disabled = false;
    }else{
        element.checked = false;
        element.disabled = true;
    }
});

    




list_checkboxes.forEach( (element, index) => {
    element.checked = true;
    element.disabled = true;
});


console.log(checkboxes);
asientos_1.forEach(element => {
    // element.style.display = "none";
    // console.log(element);
});
// console.log(sala);