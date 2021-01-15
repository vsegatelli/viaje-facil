const express = require('express')
const app = express()

const indexRoutes = require('./routes/index')
const destinosRoutes = require('./routes/destinos')

const port = 5000

app.use('/', indexRoutes)
app.use('/destinos', destinosRoutes)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))