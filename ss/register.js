//Parts of let

let saloon ={

    name: "The Fashion Pet",
    address:{
        street: "Lomas Virreyes",
        number: "78773",
        zip: "21044",
        city: "BC",
        state: "Tijuana"
    },

    hours:{
        open: "9:00am",
        close: "7:00pm"
    },
 }

 let pets =[  //Pets Registry
    {
        name:"Sammy",
        age:"12",
        gender:"Female",
        breed:"Chihuahua",
        service:"Grooming",
        ownerName:"Jadro",
        contactPhone:"646-414-5928"
    },
    {
        name:"Lexie",
        age:"3",
        gender:"Female",
        breed:"Cat White",
        service:"Grooming",
        ownerName:"Jorge",
        contactPhone:"880-242-491 "
    },
    {
        name:"Balin",
        age:"13",
        gender:"Male",
        breed:"Chihuahua",
        service:"Mouth cleaning",
        ownerName:"Georgie",
        contactPhone:"450-666-521 "
    },

    {
        name:"Chiquillo",
        age:"2",
        gender:"Male",
        breed:"Woodpecker",
        service:"Vaccination",
        ownerName:"Andres",
        contactPhone:"69-6969-4269"
    }

];


//Functions

 function displayInfo(){

    document.getElementById("footer-info").innerHTML=`
    <p>${saloon.address.street} ${saloon.address.number}, ZIP
    code: ${saloon.address.zip} </p>
    <p>${saloon.address.city}, ${saloon.address.state}</p>
    `;
 }


 function displayPetNames(){

  for(let i = 0; i<pets.length; i++)

  console.log(pets[i].name);
 }


 //Displays Functions
 displayInfo();
 displayPetNames();

