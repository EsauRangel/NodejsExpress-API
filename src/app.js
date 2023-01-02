import express from 'express'
import employeeRoutes from './routes/employees.routes.js'


const app = express()
app.use(express.json())

app.use('/api/v1',employeeRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint ot found"
    })
})

export default app;