const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: { type: String, required: true, trim: true, maxlength: 30 },
    description: { type: String, required: true, trim: true },
    create_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: null },
    link: String,
    admin_name: String,
    img: String,
    channel: [
        {
            type: String,
            required: true,
            enum: {
                values: ['web', 'movil'],
                message: 'Invalid Country',
            },
        },
    ],
    state: {
        type: String,
        required: true,
        lowercase: true,
        enum: {
            values: ['new', 'active', 'inactive', 'expired'],
            message: 'Invalid state',
        },
    },
    country: [
        {
            type: String,
            required: true,
            lowercase: true,
            enum: {
                values: ['Ve', 'Co', 'Cl', 'Pe', 'Ec', 'Mx'],
                message: 'Invalid Country',
            },
        },
    ],
});

const newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;
