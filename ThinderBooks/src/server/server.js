let express = require('express');
let server = express();
let mongoose = require('mongoose');
let Book = require('./models/books')
let bodyParser = require('body-parser')
let cors = require('cors')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors())

let port = process.env.PORT || 8080;
let router = express.Router();

mongoose.connect('mongodb://localhost/thinderbooks')
let db = mongoose.connection;

router.route('/books')
    .post((req, res, next) => {
        let book = new Book(req.body);
        book.save();
        res.send({ message: "Cadastrado com sucesso!"})
    })

    .get((req, res, next) => {
        Book.find().then(books => {
            res.send(books)
        })
    })

    .put((req, res, next) => {
        Book.findByIdAndUpdate(req.body._id, req.body)
            .then(_ => res.send({ message: "Livro atualizado com sucesso!" }))
            .catch(err => {
                console.log(err)
            })
    })

    .patch((req, res, next) => {
        Book.findByIdAndRemove(req.body._id).then(_ => {

        }).catch(err => console.log(err))
    })

server.use('/api', router);
server.listen(port);
console.log('Port: ' + port);