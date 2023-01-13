// Задание 1 
const obj = {
	rabbit: "ears",
  fox: "tail"
};
let anymal = Object.create(obj);
anymal.bear = 'paw';
anymal.wolf = 'fang';
anymal.hedgehog = 'needles';
function test(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) console.log(`${key}: ${obj[key]}`);
	}
}
test(anymal);

// Задание 2
function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const neighbour1 = {
    name: "Alex", 
    floor: 6,
    flat: 182,
  };

console.log(showProps(neighbour1, "floor"));  
console.log(showProps(neighbour1, "street")); 

// Задание 3 
function createObject () {
    return Object.create(null);
  }
  
  const obj = createObject();
  console.log(obj);
  console.log(Object.getPrototypeOf(obj));

  // Задание 4 
  function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isEnabled = false;
  } // метод, который определяет прибор как включенный в розетку 
  
  ElectricDevice.prototype.plugIn = function() {
    console.log(this.name + " is work!");
    this.isEnabled = true;
  }
  
  ElectricDevice.prototype.getPowerUsed = function() {
    return this.isEnabled ? this.power : 0;
  }
  
  
  const radiator = new ElectricDevice('radiator', 83);
  const iron = new ElectricDevice('iron', 52);
  
  console.log(radiator.getPowerUsed() + iron.getPowerUsed());
  
  radiator.plugIn();
  console.log(radiator.getPowerUsed() + iron.getPowerUsed());
  
  iron.plugIn();
  console.log(radiator.getPowerUsed() + iron.getPowerUsed());

  // Задание 5
  class ElectricDevice
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isEnabled = false;
  }
  
  plugIn()
  {
    console.log(this.name + " is work!");
    this.isEnabled = true;
  }
  
  getPowerUsed()
  {
    return this.isEnabled ? this.power : 0;
  }
}

const radiator = new ElectricDevice('radiator', 83)
const iron = new ElectricDevice('iron', 52);

console.log(radiator.getPowerUsed() + iron.getPowerUsed());

radiator.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());

iron.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());