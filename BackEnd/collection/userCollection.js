var { User } = require('../model/user')

const postUserDetail = async (req, res) => {
    var user = new User({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    });

    const username = await User.findOne({name: req.body.name})

    if(!username){
        user.save((err,doc)=>{
            if(!err){
                res.status(200).json({message : 'data stored successfully',doc})
            }
            else{
                res.status(400).json({message : 'error in storing user data',doc})
            }
        })
    }
    else{
        res.status(403).json({message : 'user already exists'})
    }
}

const getUserDetail = async(req,res)=>{
    User.find((err,doc)=>{
        if(!err){
            res.status(200).json({message : 'all user are retrived',doc})
        }
        else{
            res.status(400).json({message : 'error in retriving all user data',doc})
        }
    })
}

const updateUserDetail = async(req,res)=>{
    var user = {
        name    : req.body.name,
        email   : req.body.email,
        phone  : req.body.phone
    }
    User.updateOne({_id:req.params._id},{$set:user},{new:true},(err,doc)=>{
        if(!err){
            res.status(200).json({message:'products updated',doc})
        }else{
            res.status(400).json({message:'error in updating products',doc})
        }
    })
}

const getUserDetailById = async(req,res)=>{
    User.findOne({_id : req.params._id},(err,doc)=>{
        if(!err){
            res.status(200).json({message:'User detail are retrived',doc})
        }else{
            res.status(400).json({message:'User detail not Found',doc})
        }
    })
}

const deleteUserDetail = async(req,res)=>{
    User.findByIdAndRemove({_id : req.params._id},(err,data)=>{
        if(!err)
            res.status(200).json({message:'products deleted'})
        else
            res.status(400).json({message:'Error in deleting product',data})
    });
}

module.exports = {postUserDetail,getUserDetail,getUserDetailById,updateUserDetail,deleteUserDetail}