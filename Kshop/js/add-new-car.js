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
("car-create-form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    create();
    this.reset();
});

const BASE_URL ="https://6686438b83c983911b016366.mockapi.io"

 async function create(){
    const respone = await fetch(`${BASE_URL}/api/v1/car`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            licensePlate: formLicensePlate.value,
            repairDate : formRepairDate.value,
            customerName : formCustomerName.value,
            catalog : formCatalog.value,
            carMaker : formCarMaker.value,
        })
    });
    const  car = await respone.json();
    alert(car);
}