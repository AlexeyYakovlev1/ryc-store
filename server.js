// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');

// const app = express();

// const PORT = 8000;

// const LOGIN = 'alexey';
// const PASSWORD = 'kEEVxW6DbYBQMtod';
// const URI = `mongodb+srv://alexey:${PASSWORD}@cluster0.njslq.mongodb.net/shop?retryWrites=true&w=majority`;

// app.use(express.static(__dirname + '/dist/'));
// app.use(express.json({ extended: true }));
// app.use('/api/auth', require('./routes/auth.routes'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../ryc-store/src/', 'index.html'));
// })

// app.get('/sale', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../ryc-store/src/', 'sale.html'));
// })

// const start = async() => {
//     try {
//         await mongoose.connect(URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         })
//         app.listen(PORT, () => console.log(`server has been started on port ${PORT}`));
//     } catch (err) {
//         console.log(`error: ${err.message}`);
//         process.exit(1);
//     }
// }

// start();

const express = require('express');
const path = require('path');

const app = express();

const PORT = 8000;

app.use(express.static(__dirname + '/dist/'));

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/', 'index.html'));
})

app.get('/sale', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/', 'sale.html'));
})

const start = async() => {
    try {
        app.listen(PORT, () => console.log(`server has been started on port ${PORT}`));
    } catch (err) {
        console.log(`error: ${err.message}`);
        process.exit(1);
    }
}

start();