import express from "express"
import addId from "../controlers/userid.js"
import { deleteId, getId } from "../controlers/userid.js"
const idRoutes = express.Router()

idRoutes.post('/save',addId)
idRoutes.get('/getId',getId)
idRoutes.delete('/delete',deleteId)
export default idRoutes