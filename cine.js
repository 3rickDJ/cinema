const data = {
    "salas": [
      {
        "id": 1,
        "nombre": "Sala 1",
        "horarios": [
          {
            "hora": "10:00",
            "asientos": [
              {
                "numero": 1,
                "estado": "disponible"
              },
              // ...more seats
            ]
          },
          // ...more schedules
        ]
      },
      // ...more movies
    ]
  };
  
  function createMovieScheduleElements(movie) {
    const container = document.createElement("div");
    container.classList.add("movie-container");
  
    const title = document.createElement("h2");
    title.textContent = movie.nombre;
    container.appendChild(title);
  
    movie.horarios.forEach((horario) => {
      const scheduleContainer = document.createElement("div");
      scheduleContainer.classList.add("schedule-container");
  
      const scheduleTitle = document.createElement("h3");
      scheduleTitle.textContent = `Horario: ${horario.hora}`;
      scheduleContainer.appendChild(scheduleTitle);
  
      const seatsContainer = document.createElement("div");
      seatsContainer.classList.add("seats-container");
  
      horario.asientos.forEach((asiento) => {
        const seatLabel = document.createElement("label");
        seatLabel.textContent = `Asiento ${asiento.numero}`;
  
        const seatCheckbox = document.createElement("input");
        seatCheckbox.type = "checkbox";
        seatCheckbox.name = "seats";
        seatCheckbox.value = asiento.numero;
  
        seatLabel.appendChild(seatCheckbox);
        seatsContainer.appendChild(seatLabel);
      });
  
      scheduleContainer.appendChild(seatsContainer);
      container.appendChild(scheduleContainer);
    });
  
    return container;
  }
  
  // Function to calculate the total price based on the selected seats
  function calculateTotalPrice() {
    const checkboxes = document.querySelectorAll('input[name="seats"]:checked');
    let totalPrice = 0;
  
    checkboxes.forEach((checkbox) => {
      const seatNumber = parseInt(checkbox.value);
      totalPrice += seatNumber; // Assuming the price is based on the seat number
    });
  
    return totalPrice;
  }
  
  // Render the movie schedules and seats
  const moviesContainer = document.getElementById("movies-container");
  data.salas.forEach((movie) => {
    const movieElement = createMovieScheduleElements(movie);
    moviesContainer.appendChild(movieElement);
  });
  
  // Update the total price when a checkbox is clicked
  const checkboxes = document.querySelectorAll('input[name="seats"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const totalPrice = calculateTotalPrice();
      document.getElementById("total-price").textContent = `Total Price: $${totalPrice}`;
    });
  });
  


// const select = document.getElementById("horario_1");

// // change the visibility of each element in lista

// let asientos = document.getElementsByClassName("asientos_1");


// let lista = [...asientos];

// select.addEventListener("change", function () {
//     // let value = select.options[select.selectedIndex].value;
//     lista.forEach(element => {
//         element.style.display = "none";
//     }); 
//     console.log(select.value);
//     console.log("asientos" + select.value);
//     const selected = document.getElementById("asientos_" + select.value);
//     if(selected){
//         selected.style.display = "block";
//     }
//     let api_asientos;
//     fetch('http://localhost:8080/sala')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         api_asientos = myJson;
//         console.log(api_asientos);
//     });
//     console.log(api_asientos);
// });


// let asientos_1 = [...document.querySelectorAll("div.sala1 div.asientos_1#asientos_1 input[type=checkbox]")];

// asientos_1[0].checked = true;
// console.log(asientos_1[0]);











/////////// primera version



// let comprar_entrada = document.getElementById("comprar_entrada");
// comprar_entrada.addEventListener("click", function() {
//     const sala = document.getElementById("sala1");
//     const asientos = sala.querySelectorAll("#asientos_1");
//     const checkboxes = asientos.querySelectorAll("input[type=checkbox]:checked");
//     console.log(checkboxes);
//     let values = [];
//     checkboxes.forEach((checkbox) => {
//         values.push(checkbox.value);
//     }
//     );
//     console.log(values);
//     return values;
// });

// const sala = document.querySelectorAll(".asientos_1#asientos_1");
// const asientos_1 = [...sala]
// // const checkboxes = document.querySelectorAll(".asientos_1 #asientos_1 input[type=checkbox]:checked");
// const checkboxes = document.querySelectorAll('div.sala1 div.asientos_1#asientos_1 input[type=checkbox]');
// const list_checkboxes = [...checkboxes];

// let boxes;

// async function fetchBoxes() {
//   try {
//     const response = await fetch('http://localhost:8080/sala/0/horario/0/asientos');
//     const data = await response.json();
//     boxes = data;
//     console.log(boxes);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// boxes = fetchBoxes();
// console.log(boxes);


// //make a function to check the checkboxes if thery are in the boxes array
// // console.log(boxes);

// list_checkboxes.forEach( (element, index) => {
//     element.checked = false;
//     element.disabled = false;
//     console.log(index);
//     if(boxes[index].estado == 'disponible'){
//         element.disabled = false;
//     }else{
//         element.checked = false;
//         element.disabled = true;
//     }
// });

    




// list_checkboxes.forEach( (element, index) => {
//     element.checked = true;
//     element.disabled = true;
// });


// console.log(checkboxes);
// asientos_1.forEach(element => {
//     // element.style.display = "none";
//     // console.log(element);
// });
// // console.log(sala);