// document.addEventListener('DOMContentLoaded', () => {
//     const carForm = document.getElementById('carForm');
//     const carTableBody = document.querySelector('#carTable tbody');
//     let cars = [];
//     let editIndex = -1;

//     carForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const carName = document.getElementById('carName').value;
//         const year = document.getElementById('year').value;
//         const price = document.getElementById('price').value;

//         const car = { carName, year, price };

//         if (editIndex === -1) {
//             cars.push(car);
//         } else {
//             cars[editIndex] = car;
//             editIndex = -1;
//         }

//         carForm.reset();
//         displayCars();
//     });

//     function displayCars() {
//         carTableBody.innerHTML = '';
//         cars.forEach((car, index) => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${car.carName}</td>
//                 <td>${car.year}</td>
//                 <td>${car.price}</td>
//                 <td class="actions">
//                     <button onclick="editCar(${index})">Edit</button>
//                     <button onclick="deleteCar(${index})">Delete</button>
//                 </td>
//             `;
//             carTableBody.appendChild(row);
//         });
//     }

//     window.editCar = (index) => {
//         document.getElementById('carName').value = cars[index].carName;
//         document.getElementById('year').value = cars[index].year;
//         document.getElementById('price').value = cars[index].price;
//         editIndex = index;
//     };

//     window.deleteCar = (index) => {
//         cars.splice(index, 1);
//         displayCars();
//     };

//     displayCars();
// });


document.addEventListener('DOMContentLoaded', () => {
    const carForm = document.getElementById('carForm');
    const carTableBody = document.querySelector('#carTable tbody');
    const carIdInput = document.getElementById('carId');
    let cars = [];
    let editIndex = -1;

    // Load cars from localStorage on page load
    loadCarsFromLocalStorage();

    carForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const carName = document.getElementById('carName').value;
        const year = document.getElementById('year').value;
        const price = document.getElementById('price').value;

        const car = { carName, year, price };

        if (editIndex === -1) {
            cars.push(car);
        } else {
            cars[editIndex] = car;
            editIndex = -1;
        }

        carForm.reset();
        displayCars();
        saveCarsToLocalStorage();
    });

    function displayCars() {
        carTableBody.innerHTML = '';
        cars.forEach((car, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${car.carName}</td>
                <td>${car.year}</td>
                <td>${car.price}</td>
                <td class="actions">
                    <button onclick="editCar(${index})">Edit</button>
                    <button onclick="deleteCar(${index})">Delete</button>
                </td>
            `;
            carTableBody.appendChild(row);
        });
    }

    function loadCarsFromLocalStorage() {
        const storedCars = JSON.parse(localStorage.getItem('cars')) || [];
        cars = storedCars;
        displayCars();
    }

    function saveCarsToLocalStorage() {
        localStorage.setItem('cars', JSON.stringify(cars));
    }

    window.editCar = (index) => {
        document.getElementById('carName').value = cars[index].carName;
        document.getElementById('year').value = cars[index].year;
        document.getElementById('price').value = cars[index].price;
        editIndex = index;
    };

    window.deleteCar = (index) => {
        cars.splice(index, 1);
        displayCars();
        saveCarsToLocalStorage();
    };
});



