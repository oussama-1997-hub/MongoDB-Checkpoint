const express=require("express")
const router=express.Router()
const Contact=require('../models/Contact')
//add new contact
router.post('/add',async(req,res)=>{
    const {name,email,phone}=req.body
const newContact=new Contact({name,email,phone})
const contact= await newContact.save()
res.send({msg:"contact added",contact})
})
router.get("/",async(req,res)=>{
    const contacts=await Contact.find()

    res.send({msg:'data fetched',contacts})
})
//ddelete user
router.delete('/:id',async(req,res)=>{
const {id}=req.params
const contact=await Contact.findOneAndDelete({_id:id})
res.send({msg:"contact deleted",contact})
})
//edit contact
router.put('/edit/:id',async(req,res)=>{
    const{id}=req.params
    const contact=await Contact.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:'contact edited',contact})
})

module.exports=router