import express from "express";
import { createWorkout, deleteWorkout, getWorkouts, getWorkout, updateWorkout } from "../controllers/workouts.controller.js";

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);





export default router;