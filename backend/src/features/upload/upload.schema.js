import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required'],
        trim: true,
    },

    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
        validate: {
            validator: function(t) {
                return /^\+\d{10,15}$/.test(v);
            },
            message: "Phone no must be in valid format"
        }
    },

    notes: {
        type: String,
        required: [true, 'Notes is required']
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'agent'
    }
}, { timestamps: true } );

const uploadModel = mongoose.model('files', uploadSchema);
export default uploadModel;