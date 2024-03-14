import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, searchGetHotels, updateHotel } from "../controllers/hotel.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)
0
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/find/:id", getHotel)

//GET ALL
router.get("/", getHotels)
router.get("/search", searchGetHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router