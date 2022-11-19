const express = require('express')
const app = express()
const router = require('./router')

const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/productos', router);

const server = app.listen(PORT, ()=>{
    console.log(`Serever running on port ${PORT}`);
})
server.on('error', (error)=>{
    console.log(`Error on ${error}` );
});
