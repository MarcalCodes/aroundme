const express = require('express')
const userRoutes = require('./routes/userRoutes');

const app = express()
const port = 3000


app.use('/users', userRoutes);

app.get('/', (request, response) => {
    response.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})