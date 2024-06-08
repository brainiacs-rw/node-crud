const express=require("express")
const {getSingleCitizen, updateCitizen, createCitizen, deleteCitizens, getAllCitizens} = require("../controllers/citizens.controller")
const router=express.Router()
router.get("/",getAllCitizens)
router.get("/:id",getSingleCitizen)
router.put("/:id",updateCitizen)
router.delete("/:id",deleteCitizens)
router.post("/",createCitizen)
module.exports.citizensRouter=router