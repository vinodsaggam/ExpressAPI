import Subscribers from "../models/subscribers.js";

export const getAllSubs = async (req,res) => {

    const subscribers = await Subscribers.find({})
         try {
            res.status(200).json(subscribers)
         } catch (error) {
            res.status(400).json({ message: error.message})
         }
}

export const postSubs = async (req,res) => {

    const {subscribed, name } = req.body;

    const newSub = new Subscribers({
        name: name,
        subscribed: subscribed
    })
    
    try {
        const subscribed = await newSub.save();
        res.status(201).json(subscribed);
    } catch (error) {
        res.status(400).json({ message: error.message})
    }

}

export const getSubs = async (req,res) => {
    const {id} = req.params;
    try {
        const findSub = await Subscribers.findById(id)
        res.status(200).json(findSub)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export const deleteSubs = async (req,res) => {
    const {id} = req.params;
    try {
        const removeSub = await Subscribers.remove({"_id": id})
        res.status(200).json(removeSub)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }

}

export const patchSubs = async (req,res) => {

    const {name } = req.body;
    const {id} = req.params;
    
    try {
        const findSub = await Subscribers.findById(id);
        findSub.name = name;
        const newSubs =  findSub.save();
        res.status(201).json(findSub);
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export const putSubs = async (req,res) => {

    const {name } = req.body;
    const {id} = req.params;
    
    try {
        const findSub = await Subscribers.findById(id);
        findSub.name = name;
        const newSubs =  findSub.save();
        res.status(201).json(findSub);
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}