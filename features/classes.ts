class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class CarVehicle extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const carInstance = new CarVehicle(4, "red");
carInstance.startDriving();
