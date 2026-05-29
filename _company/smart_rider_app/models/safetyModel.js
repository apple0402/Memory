const mongoose = require('mongoose');

const SafetySchema = new mongoose.Schema({
    incidentType: {
        type: String, // 예: 사고, 위험 상황, 안전 점검
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String, // 상세 위치 정보 (위도/경도 또는 주소)
        required: true,
    },
    reportedAt: {
        type: Date,
        default: Date.now,
    },
    safetyScore: {
        type: Number, // 1~10점 등 점수화
        min: 1,
        max: 10,
        default: 5,
    }
}, { timestamps: true });

module.exports = mongoose.model('Safety', SafetySchema);