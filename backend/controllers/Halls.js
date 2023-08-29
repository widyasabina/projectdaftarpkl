import Hall from "../models/HallModel.js"
import User from "../models/UserModel.js"
import {Op} from "sequelize";

export const getHalls = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Hall.findAll({
                attributes:['uuid','title','desc','photo'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Hall.findAll({
                attributes:['uuid','title','desc','photo'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getHallById = async (req, res) => {
    try {
        const hall = await Hall.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!hall) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Hall.findOne({
                attributes:['uuid','title','desc','photo'],
                where:{
                    id: hall.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Hall.findOne({
                attributes:['uuid','title','desc','photo'],
                where:{
                    [Op.and]:[{id: hall.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createHall = async (req, res) => {
    const {title, desc, photo} = req.body;
    try {
        await Hall.create({
            title: title,
            desc: desc,
            photo: photo,
            userId: req.userId
        });
        res.status(201).json({msg: "Balai Berhasil dibuat"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateHall = async (req, res) => {
    try {
        const hall = await Hall.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!hall) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {title, desc, photo} = req.body;
        if(req.role === "admin"){
            await Hall.update({title, desc, photo},{
                where:{
                    id: hall.id
                }
            });
        }else{
            if(req.userId !== hall.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Hall.update({title, desc, photo},{
                where:{
                    [Op.and]:[{id: hall.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Balai berhasil diperbaharui"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteHall = async (req, res) => {
    try {
        const hall = await Hall.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!hall) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {title, desc, photo} = req.body;
        if(req.role === "admin"){
            await Hall.destroy({
                where:{
                    id: hall.id
                }
            });
        }else{
            if(req.userId !== hall.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Hall.destroy({
                where:{
                    [Op.and]:[{id: hall.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Balai berhasil dihapus"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}