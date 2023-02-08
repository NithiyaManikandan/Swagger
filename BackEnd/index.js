const express = require('express')
const mongoose = require('mongoose')
var user = require('./routes/userRoutes')
var task = require('./routes/taskRoutes')

const bodyParser = require('body-parser')
const cors = require('cors')
var app = express();

const swaggerUI = require('swagger-ui-express')
const yaml = require('yamljs')

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}))

const swaggerDocument = yaml.load('./swagger.yaml');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

mongoose.connect('mongodb://localhost:27017/userForm',(err)=>{
    if(!err){
        console.log('Database connected successfully at port');
    }
    else{
        console.log('error in connection');
    }
})

app.use('/userForm',user)
app.use('/task',task)

app.listen(8000,()=> console.log('server started at port : 8000'));
