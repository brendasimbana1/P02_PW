const mongoose = require('mongoose');

const dbUri ='mongodb+srv://bsimbanag1:1234@cluster0.u1z20lj.mongodb.net/gastos?retryWrites=true&w=majority';

mongoose.connect(dbUri)
  .then(() => {
    console.log('Conexión a MongoDB Atlas exitosa');
  })
  .catch((error) => {
    console.error('Error conectándose a MongoDB Atlas:', error);
  });