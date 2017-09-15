const express=require('express')
const router =express.Router()
let model=require('../models')

router.get('/',(req,res)=>{
  model.Supplier.findAll()
  .then(function(supplier){
    res.render('supplier',{data:data})
  })
})

// router.get('/add/:id',(req,res)=>{
//   res.render('supplier-add',{err:false})
// })
//
// router.post('/add',(req,res)=>{
//   model.Supplier.create({
//     name:req.body.name,
//     kota:req.body.kota
//   })
//   .then(()=>{
//     res.redirect('/supplier')
//   })
// })
//
// router.get('/edit/:id',(req,res)=>{
//   model.Supplier.findById(req.params.id)
//   .then((supplier)=>{
//     res.render('supplier-edit',{Datasupplier:supplier})
//   })
// })
//
// router.post('/edit:id',(req,res)=>{
//   model.Supplier.update({
//     name:req.body.name,
//     kota:req.body.kota
//   },{
//     where:{
//       id:req.params.id
//     }
//   })
//   .then(()=>{
//     res.redirect('/dokter')
//   })
// })
//
// router.get('/delete/:id',(req,res)=>{
//   model.Supplier.destroy({
//     where:{
//       id:req.params.id
//     }
//   })
//   .then(()=>{
//     res.redirect('/supplier')
//   })
// })

module.exports=router
