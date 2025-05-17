import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function(value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },

            message: "Please enter a valid email address"
        },
    },

    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
        unique: true,
        validate: {
            validator: function (v) {
                return /^\+\d{10,15}$/.test(v);
            },
            message: "Mobile number must be in valid format"
        }
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, "Password must be at least 6 characters long"]
    }
});

const agentModel = mongoose.model("agent", agentSchema);

export default agentModel;