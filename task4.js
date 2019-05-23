function Vehicle(colour, speed , wheels){
  this.colour = colour;
  this.speed = speed;
  this.wheels = wheels;
  
  this.start = function() 
  {
    console.log(" starts");
  };
  
  this.break = function() 
  {
    console.log("Break applied");
  };

  this.accelerate = function() 
  {
    console.log("Vehicle Accelerated");
  };
}

function Transporation_vehicle(loading_capacity ,colour, speed , wheels){
  this.loading_capacity = loading_capacity;
  Vehicle.call(this, colour, speed , wheels);
}

function Passenger_vehicle(Passenger_seats ,colour, speed , wheels){
  this.Passenger_seats = Passenger_seats;
  Vehicle.call(this, colour, speed , wheels);
}

function Car( model ,colour, speed , wheels){
  this.model = model;
  Vehicle.call(this, colour, speed , wheels);
  this.drive = function(){
    console.log('Car ' + this.model + ' driving');
  }
}

function Bus( length ,colour, speed , wheels){
  this.length = length;
  Vehicle.call(this, colour, speed , wheels);
}

function Track( weight_capacity ,colour, speed , wheels){
  this.weight_capacity = weight_capacity;
  Vehicle.call(this, colour, speed , wheels);
}

function Bike( weight ,colour, speed , wheels){
  this.weight = weight;
  Vehicle.call(this, colour, speed , wheels);
}

function OffRoad( model ,colour, speed , wheels){
  this.model = model;
  Vehicle.call(this, colour, speed , wheels);
  this.run = function(){
    console.log('OffRoad speed is  ' + this.speed );
  }
}

function CarOffRoadVehicle(){
  Vehicle.call(this);
}

function SUV(size ,model, colour, speed, wheels)
{
  Car.call(this, model, colour, speed, wheels);
  OffRoad.call(this, model, colour, speed, wheels);
  this.size = size;

}

Transporation_vehicle.prototype = Vehicle;
Passenger_vehicle.prototype = Vehicle;
Car.prototype = Vehicle;
Bus.prototype = Vehicle;
Track.prototype = Vehicle;
Bike.prototype = Vehicle;
OffRoad.prototype = Vehicle;
SUV.prototype = CarOffRoadVehicle;

//QUESTION 1:

// var car1 = new Car(2000, 'red', 120, 5);
// var car2 = new Car(2003, 'green', 140, 6);
// car1.speed = 130;

// car1['cc'] = 500

// console.log(car1);

// console.log(car2);

//ANSWER : Every instance share its own properties and methods

//QUESTION 2: 
//Answer : Vehicle properties created for each instance of car.

//QUESTION 3: 
//Answer : By increamenting on creation of every new vehicle of any type just like static. 

//QUESTION 4:
// Can create price method in vehicle from main or in  the object function just like break and other functions.

//QUESTION 5:
//Yes we need to call the parent constructor to set all the properties which are shared among all vehicles.

//QUESTION 6:
//Protype of SUV is car and OFFroad as it has two parents

//QUESTION 7
//Then SUV will also not work
