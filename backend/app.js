import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('welcome');
});


export default app;