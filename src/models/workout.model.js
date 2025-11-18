import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        name: {
            type: String,
            trim: true,
            required: true,
        },

        duration: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["pending", "completed"],
            default: "pending",
        },
    },
    {
        timestamps: {
            createdAt: "dateAdded",
            updatedAt: "dateUpdated",
        },
        collection: "workouts",
    }
);

const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;
