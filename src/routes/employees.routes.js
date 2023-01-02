import { Router } from "express"
import { createEmployees, getEmployee, getEmployees, deleteEmployee, updatedEmployee, updatedEmployeePatch } from "../controllers/employees.controller.js"
const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', createEmployees)
router.put('/employees/:id', updatedEmployee)
router.patch('/employees/:id', updatedEmployeePatch)
router.delete('/employees/:id', deleteEmployee)

export default router