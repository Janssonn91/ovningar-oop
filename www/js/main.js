class Person {

  constructor(data) {
    this._name = data.name;
    this._age = data.age;
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

}
let niklas = new Person( {age: 26, name: 'niklas'} );

// {
//   _name: 'niklas',
//   _age: 26
// }