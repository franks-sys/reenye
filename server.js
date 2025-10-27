require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const pacientesRoutes = require('./src/routes/pacientes.routes');
const consultasRoutes = require('./src/routes/consultas.routes');
const usersRoutes = require('./src/routes/users.routes');

app.use(express.json());
app.use(cors());

app.use(pacientesRoutes);
app.use(consultasRoutes);
app.use(usersRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})

