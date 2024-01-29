import Workout from "../models/workout.model.js";
import mongoose from "mongoose";

// get all workouts
export const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
}

// get a single workout
export const getWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Id is not valid"});
    }

    const workout = await Workout.findById(id);
    
    if(!workout) {
        return res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout);
}

// create new workout
export const createWorkout = async (req, res) => {
    console.log(req.body)
    const {title, reps, load} = req.body;

    const emptyFields = [];

    if(!title){
        emptyFields.push('title');
    }
    if(!load){
        emptyFields.push('load');
    }
    if(!reps){
        emptyFields.push('reps');
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try{
        const workout = await Workout.create({title,reps,load});
        res.status(200).json(workout);
    } catch(err){
        res.status(400).json({error: err.message})
    }
}

// delete workout
export const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Id is not valid"});
    }

    const workout = await Workout.findOneAndDelete({_id:id});

    if(!workout){
        return res.status(404).json({error: "No such a workout founded"});
    }

    res.status(200).json({deletedWorkout: workout, msg: "Succsesfully deleted"});
}

// update a workout
export const updateWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Id is not valid"});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!workout){
        return res.status(404).json({error: "No such a workout founded"});
    }

    res.status(200).json({updatedWorkout: workout, msg: "Succsesfully updated"});
}