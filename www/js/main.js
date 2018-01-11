class Person {

  constructor(data) {
    if (data.age > 0 && data.age < 100) {
      this._name = data.name;
      this._age = data.age;
    } else {
      alert('Din ålder är fel');
    }
  }

  set age(changeAge) {
    if (changeAge > 0 && changeAge < 100) {
      this._age = changeAge;
    } else {
      alert('Ålder måste vara över 0 och under 100, mata in din ålder korrekt!');
    }
  }

  get age() {
    return this._age;
  }

  set name(val) {
    if (val.length > 2) {
      this._name = val;
    } else {
      alert('Du har inget namn, My!')
    }
  }

  get name() {
    return this._name = this._name.slice(0, 15);
  }
}
let niklas = new Person( {age: 26, name: 'Niklas'} );