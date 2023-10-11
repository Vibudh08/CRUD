const studentModel = require('../models/Student.js')
class HomeController {

    static createDoc = async(req,res)=>{
        try {
            const doc = new studentModel({
                name : req.body.name,
                age : req.body.age,
                fees : req.body.fees
            })
            //saving document in database
            const result = await doc.save()
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }

    static getAllDoc = async (req,res)=>{
        try {
            const result = await studentModel.find()
            res.render('index.ejs',{data : result})
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    static editDoc = async(req,res)=>{
        try {
            const result = await studentModel.findById(req.params.id)
            // console.log(result)
            res.render('edit.ejs',{data:result})
        } catch (error) {
           console.log(error) 
        }
    }

    static updateDocById = async(req,res)=>{
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id,req.body)
            // console.log(req.params.id)
            // console.log(req.body)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }

    static deleteDocById = async(req,res)=>{
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = HomeController