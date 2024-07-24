const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bsimbanag1:1234@cluster0.u1z20lj.mongodb.net/gastos?retryWrites=true&w=majority')

.then(db => console.log('Database is connected'))
.catch(err => console.log('err'))