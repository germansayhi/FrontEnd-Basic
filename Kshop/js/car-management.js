const loading = document.getElementById("loading");
const formId = document.getElementById
("id");
const formLicensePlate = document.getElementById
("license-plate");
const formRepairDate = document.getElementById
("repair-date");
const formCustomerName = document.getElementById
("customer-name");
const formCatalog = document.getElementById
("catalog");
const formCarMaker = document.getElementById
("car-maker");
const form = document.getElementById
("car-update-form");
const tbody = document.getElementById("cars")

const BASE_URL ="https://6686438b83c983911b016366.mockapi.io"

form.onsubmit = async function(event){
    event.preventDefault();
    await update();
    findAll();
    form.reset();
};

findAll();
async function findAll(){
    loading.style.display = "flex";
    const reponse = await fetch(`${BASE_URL}/api/v1/car`,{
        method: "GET",
        header:{
            "Content-Type" : "application/json"

        }
    });
    const body = await reponse.json();
    showCars(body);
    $("#loading").hide(1000);
    // loading.style.display = "none";
}

function showCars(cars){
    tbody.innertHTML = "";
    for(const car of cars){
     const row = tbody.insertRow();
     row.insertCell().textContent = car.licensePlate;
     row.insertCell().textContent = car.repairDate;
     row.insertCell().textContent = car.customerName;
     row.insertCell().textContent = car.catalog;
     row.insertCell().textContent = car.carMaker;

     const editButton = document.createElement("button");
     editButton.textContent = "✍️";
     editButton.onclick = function(){
        formId.value = car.id;
        formLicensePlate.value = car.licensePlate;
        formRepairDate.value = car.repairDate;
        formCustomerName.value = car.customerName;
        formCatalog.value = car.catalog;
        formCarMaker.value = car.carMaker;

     };

     const deleteButton = document.createElement("button");
      deleteButton.textContent ="❌";
      deleteButton.onclick = async function () {
        const confirmed = confirm("Do you want to delete this car?");
        if (confirmed) {
            await deleteById(car.id);
            tbody.removeChild(row);
        }
    };
    row.insertCell().append(editButton, deleteButton);
    }
}

async function update(){
    const id = formId.value;
    const response =await fetch(`${BASE_URL}/api/v1/car/$(id)`,{
        method : "PUT",
        header:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            licensePlate: formLicensePlate.value,
            repairDate : formRepairDate.value,
            customerName : formCustomerName.value,
            catalog : formCatalog.value,
            carMaker : formCarMaker.value,
        })
    });
    const body = await response.json();
    console.log(body);
    
}

async function deleteById(id) {
    const response = await fetch(`${BASE_URL}/api/v1/car/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
}
