const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://demo:demodemo1@ds125871.mlab.com:25871/bland', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 8000, () => {
    console.log('listening on 8000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('comment').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {comment: result})
  })
})

// app.get('/react', (req, res) => {
//   db.collection('messages').find().toArray((err, result) => {
//     if (err) return console.log(err)
//     res.json(result)
//   })
// })

app.post('/comment', (req, res) => {
  db.collection('comment').save({comment: req.body.comment, thumbUp: 0, thumbDown:0}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/comment', (req, res) => {
  db.collection('comment')
  .findOneAndUpdate({comment: req.body.comment}, {
    $set: {
      thumbUp:req.body.thumbUp + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/comment2', (req, res) => {
  db.collection('comment')
  .findOneAndUpdate({comment: req.body.comment}, {
    $set: {
      thumbDown:req.body.thumbDown + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/comment', (req, res) => {
  db.collection('comment').findOneAndDelete({comment: req.body.comment}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Comments deleted!')
  })
})
