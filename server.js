//server.js is the core of our application 
const express = require('express')
const app = express()
const PORT = 2000

const artist = {
    'beyonce': {
        'song': 'Formation',
        'age': 40,
    },
    'childish gambino': {
        'song':'This is America',
        'age': 38,
    },
    'h.e.r.':{
        'song':'Focus',
        'age':25,      
    },
    'noname':{
        'song':'Song 33',
        'age':30,
    },
    'usher':{
        'song': 'Yeah!',
        'age':43,
    },
    'khalid':{
        'song':'Location',
        'age':24,
    },
    'unknown':{
        'song': 'unknown',
        'age':0,
    }

}


//main route is always forward slash 
app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})
//that looks a lot like an event listener. the smurfs are back. 
//__dirname = current directory for this file

app.get('/api/:name',(request,response)=>{
    const artistName =  request.params.name.toLowerCase()
    if ( artist[artistName] ){
        response.json(artist[artistName])
    }else{
        response.json(artist['unknown'])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Go get!`)
})