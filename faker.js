const { lorem } = require('faker');
var faker = require('faker');

    var personReport = faker.name.findName(); // Rowan Nikolaus
    var incidentReport = faker.internet.email(); // Kassandra.Haley@erich.biz
    var vehicleReport = faker.helpers.createCard(); // random contact card containing many properties

    app.post('/',(req,res)=>{  
        for(var i=0; i<10;i++){  
          var Person = new Person({  
          firstname:faker.name.firstName(),  
          lastname:faker.name.lastName(),  
          phonenumber:faker.phone.phoneNumber(),  
          city:faker.address.city(),  
          state:faker.address.state(),  
          country:faker.address.country(), 
          height:faker.random.number(),
          weight:faker.random.number(), 
          witness:faker.name.firstname(),
          vitim:faker.name.firstname(),
          race.faker.commerce.color(),
          gender:faker.name.gender(),
            })  
            fakke.save((err,data)=>{  
                 if(err){
                console.log('error occured',err)  
                }
            })  
        }  
        res.redirect('/');  
      })
      
      app.post('/',(req,res)=>{  
        for(var i=0; i<10;i++){  
          var Incident = new Incident({  
          firstname:faker.name.firstName(),  
          lastname:faker.name.lastName(),  
          phonenumber:faker.phone.phoneNumber(),  
          city:faker.address.city(),  
          state:faker.address.state(),  
          country:faker.address.country(),
          witness:faker.name.firstname(),
          vitim:faker.name.firstname(),
          officename:faker.commerce.department(),
          locationinfo:faker.address.streetAddress(),
          date:faker.date.recent(),
          info:faker.lorem.text(),  
            })  
            fakke.save((err,data)=>{  
                 if(err){
                console.log('error occured',err)  
                }
            })  
        }  
        res.redirect('/');  
      })  

      app.post('/',(req,res)=>{  
        for(var i=0; i<10;i++){  
          var Vehicle = new Vehicle({  
          firstname:faker.name.firstName(),  
          lastname:faker.name.lastName(),  
          phonenumber:faker.phone.phoneNumber(),  
          city:faker.address.city(),  
          state:faker.address.state(),  
          country:faker.address.country(),
          licenseplate:faker.
          vehicle:faker.vehicle.faker(),
          colorofcar:faker.vehicle.color(),
          vin:faker.vehicle.vin(),
          model:faker.vehicle.model(),
          type:faker.vehicle.type(),
          owners:faker.name.findName(),
          value:faker.finance.amount(),
            })  
            fakke.save((err,data)=>{  
                 if(err){
                console.log('error occured',err)  
                }
            })  
        }  
        res.redirect('/');  
      })  