import { response } from 'express';
import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * from employee');
        const response = {
            "success": true,
            "message": "POST success",
            "data": rows
        }
        res.json(response);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes bad"
        })
    }
}

export const getEmployee = async (req, res) => {
    try {
        const employeeID = (!isNaN(req.params.id) ? req.params.id : 1)

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', employeeID)
        if (rows.length <= 0) return res.status(404).json({
            success: false,
            message: "Employee not found"
        })

        const response = {
            "success": true,
            "message": "POST success",
            "data": rows
        }
        res.json(response);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes bad"
        })
    }
}
export const createEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body
        await pool.query('INSERT INTO employee (name, salary) VALUES(?, ?)', [name, salary])
        const response = {
            "success": true,
            "message": "POST success"
        }
        res.json(response)
    } catch (error) {
        return res.status(500).json({
            message: "Somethig goes bad"
        })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id

        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', employeeId)
        if (result.affectedRows <= 0) return res.status(404).json({
            "success": false,
            "message": "No se encontro el usuario"
        })
        const response = {
            "success": true,
            "message": "Delete success"
        }
        res.json(response)
    } catch (error) {
        return res.status(500).json({
            message: "Something goes bad"
        })
    }
}

export const updatedEmployee = async (req, res) => {
    try {
        const employeeID = req.params.id
        const { name, salary } = req.body

        const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, employeeID])
        if (result.affectedRows <= 0) return res.status(404).json({
            "success": false,
            "message": "No existe el usuario"
        })
        const response = {
            "success": true,
            "message": "Update success"
        }
        res.json(response)
    } catch (error) {
        return res.status(500).json({
            message: "Something goes bad"
        })
    }
}

export const updatedEmployeePatch = async (req, res) => {
    try {
        const employeeID = req.params.id
        const { name, salary } = req.body
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, employeeID])
        if (result.affectedRows <= 0) return res.status(404).json({
            "success": false,
            "message": "No existe el usuario"
        })
        const response = {
            "success": true,
            "message": "Update success"
        }
        res.json(response)
    } catch (error) {
        return res.status(500).json({
            message: "Something goes bad"
        })
    }
}
