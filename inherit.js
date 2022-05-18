//inheritance by using object 

const obj={
    type:"automobile",
    brand:"Tata",
    wheels:4
}

let xuv300=Object.create(obj)
xuv300.name="XUV300";

let indica=Object.create(obj)
indica.name="Indica";

let Creta=Object.create(obj,{name:{value:"CRETA"}});

console.log(xuv300)
console.log(indica)
console.log(Creta);

//inheritance by using function constructor

function Cars(name){
    this.name=name;
    this.type="automobile";
    this.brand="Tata";
    this.wheels=4;
}

let Brezza= new Cars("Brezza");
console.log(Brezza);

Cars.prototype.changetype = function(type){
    this.type=type;
}

let Turbo= new Cars("TURBO");
Turbo.changetype("SUV");
console.log(Turbo);

Cars.prototype.changeBrand = function(brand){
    this.brand=brand;
}

let Scorpio = new Cars("SCORPIO");
Scorpio.changeBrand("Mahindra");
Scorpio.changetype("SUV");
console.log(Scorpio);


