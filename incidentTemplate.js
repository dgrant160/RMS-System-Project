const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let phonenumber = faker.phone.phoneNumber();
    let city = faker.address.city();
    let state = faker.address.state();
    let country = faker.address.country();
    let witness = faker.name.firstname();
    let victim = faker.name.firstname();
    let officername = faker.commerce.department();
    let locationinfo = faker.address.streetAddress();
    let date = faker.date.recent();
    let info = faker.lorem.text();
    let badgenumber = faker.random.number();
    let incident = incident[faker.random.number];

    users.push({
        "id": id,
        "first_name": firstname,
        "last_name": lastname,
        "email": email,
        "phonenumber": phonenumber,
        "city": city,
        "state": state,
        "country": country,
        "witness": witness,
        "victim": victim,
        "officername": officername,
        "locationinfo": locationinfo,
        "date": date,
        "info": info,
        "badgenumber": badgenumber,
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));