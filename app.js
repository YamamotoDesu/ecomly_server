const express = require('express');

const app = express();
const env = process.env;

// Start the server
const hostname = '0.0.0.0';
const port = 3000;
app.listen(port, hostname, () => {
    console.log('Server started on htttp://' + hostname + ':' + port);
});

app.get('/', (req, res) => {
    return res.status(404).json({
        message: '<h1> Not found </h1>'
    });
});

app.get('/watch/videos/:id', (req, res) => {
    return res.json({
        id: req.params.id,
        title: 'Video title',
        description: 'Video description'
    });
});

// C R U D
// Create
app.post('/api/users', (req, res) => {
    res.send('User created');
});

// // Read
// app.get('/api/users', (req, res) => {
//     res.send('User list');
// });

// // Update
// app.put('/api/users/:id', (req, res) => {
//     res.send('User updated');
// });
