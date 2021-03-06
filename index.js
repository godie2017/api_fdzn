
const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config');

mongoose.connect(config.db, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},
(err, res) =>{
  if (err){
    return console.log(`Error al conectar la base de datos ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')
  app.listen(config.port, () =>{
    console.log(`Api rest corriendo en http://localhost:${config.port}`)
  })
})
