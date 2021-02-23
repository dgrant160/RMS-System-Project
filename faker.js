var faker = require('faker');

    var personReport = faker.name.findName(); // Rowan Nikolaus
    var incidentReport = faker.internet.email(); // Kassandra.Haley@erich.biz
    var vehicleReport = faker.helpers.createCard(); // random contact card containing many properties

    app.post('/',(req,res)=>{  
        for(var i=0; i<10;i++){  
          var person = new Person({  
          firstname:faker.name.firstName(),  
          lastname:faker.name.lastName(),  
          phonenumber:faker.phone.phoneNumber(),  
          city:faker.address.city(),  
          state:faker.address.state(),  
          country:faker.address.country()  
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
          country:faker.address.country()  
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
          var person = new Person({  
          firstname:faker.name.firstName(),  
          lastname:faker.name.lastName(),  
          phonenumber:faker.phone.phoneNumber(),  
          city:faker.address.city(),  
          state:faker.address.state(),  
          country:faker.address.country()  
            })  
            fakke.save((err,data)=>{  
                 if(err){
                console.log('error occured',err)  
                }
            })  
        }  
        res.redirect('/');  
      })  