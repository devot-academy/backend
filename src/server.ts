import app from './app'

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Backend rodando na porta: " + process.env.BACKEND_PORT)
})