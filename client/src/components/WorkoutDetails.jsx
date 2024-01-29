import { LOCAL_HOST } from "../constants/constant";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

/* eslint-disable react/prop-types */
function WorkoutDetails({workout}){
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch(`${LOCAL_HOST}/api/workouts/${workout._id}`, {
            method: 'DELETE'
        });
        const json = await response.json();

        console.log(json)

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json.deletedWorkout});
        }
    }
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails;