const app = require('./app')
const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Servidor está rodando no http://localhost:${port}`);
});
