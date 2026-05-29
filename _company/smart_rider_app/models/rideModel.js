const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    riderName: {
        type: String,
        required: true,
    },
    distanceKm: {
        type: Number,
        required: true,
        min: 0,
    },
    durationMinutes: {
        type: Number,
        required: true,
        min: 1,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    routeDetails: {
        type: String, // 예: GPS 경로 또는 상세 설명
        default: ''
    },
    safetyReported: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Ride', RideSchema);