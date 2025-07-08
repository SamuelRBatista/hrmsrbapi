const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuração do caminho para a pasta de uploads
const uploadsPath = path.join(__dirname, 'uploads'); // Ajustado para uploads
app.use('/uploads', express.static(uploadsPath));

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(bodyParser.json());

// Suas rotas
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidate/candidateRoutes');
const companyRoutes = require('./routes/company/companyRoutes');
const vacancyRoutes = require('./routes/vacancy/vacancyRoutes');
const employmentTypesRoutes = require('./routes/employmentType/employmentTypesRoutes');
const stateRoutes = require('./routes/locality/stateRoutes');
const cityRoutes = require('./routes/locality/cityRoutes');

// Configurando rotas
app.use('/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', candidateRoutes);
app.use('/api', companyRoutes);
app.use('/api', vacancyRoutes);
app.use('/api', employmentTypesRoutes);
app.use('/api', stateRoutes);
app.use('/api', cityRoutes);

module.exports = app;
