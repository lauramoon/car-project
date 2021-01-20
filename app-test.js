it('should create a Vehicle with honk and toString methods', () => {
    let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
    expect(myFirstVehicle.honk()).toEqual('Beep.');
    expect(myFirstVehicle.toString()).toEqual('The vehicle is a Honda Monster Truck from 1999.');
});
it('should create a Car with four wheels and Vehicle methods', () => {
    let myFirstCar = new Car("Toyota", "Corolla", 2005);
    expect(myFirstCar.toString()).toEqual('The vehicle is a Toyota Corolla from 2005.');
    expect(myFirstCar.honk()).toEqual('Beep.');
    expect(myFirstCar.numWheels).toEqual(4);
});
it('should create a Motorcycle with 2 wheels and Vehicle and revEngine methods', () => {
    let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
    expect(myFirstMotorcycle.toString()).toEqual('The vehicle is a Honda Nighthawk from 2000.')
    expect(myFirstMotorcycle.honk()).toEqual('Beep.');
    expect(myFirstMotorcycle.revEngine()).toEqual('VROOM!!!');
    expect(myFirstMotorcycle.numWheels).toEqual(2);
});
it('should create a garage and add cars to it', () => {
    let garage = new Garage(2);
    expect(garage.vehicles).toEqual([]);
    expect(garage.add(new Car("Hyundai", "Elantra", 2015))).toEqual('Vehicle added!');
    expect(garage.vehicles[0] instanceof Car).toBe(true);
    expect(garage.vehicles.length).toEqual(1);
    expect(garage.add("Taco")).toEqual('Only vehicles are allowed in here!');
    expect(garage.add(new Motorcycle("Honda", "Nighthawk", 2000))).toEqual('Vehicle added!');
    expect(garage.vehicles[1] instanceof Motorcycle).toBe(true);
    expect(garage.vehicles.length).toEqual(2);
    expect(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))).toEqual("Sorry, we're full.");
})