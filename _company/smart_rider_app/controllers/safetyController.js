const Safety = require('../models/safetyModel');

// 모든 안전 데이터 조회
exports.getAllSafetyData = async (req, res) => {
    try {
        const safetyData = await Safety.find();
        res.status(200).json(safetyData);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch safety data', error: err.message });
    }
};

// 새로운 안전 데이터 생성
exports.createSafetyReport = async (req, res) => {
    try {
        const newSafety = new Safety({
            incidentType: req.body.incidentType,
            description: req.body.description,
            location: req.body.location,
            safetyScore: req.body.safetyScore
        });

        const safetyReport = await newSafety.save();
        res.status(201).json(safetyReport);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create safety report', error: err.message });
    }
};

// 특정 안전 데이터 조회
exports.getSafetyReportById = async (req, res) => {
    try {
        const safetyReport = await Safety.findById(req.params.id);
        if (!safetyReport) {
            return res.status(404).json({ message: 'Safety report not found' });
        }
        res.status(200).json(safetyReport);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch safety report', error: err.message });
    }
};

module.exports = exports;