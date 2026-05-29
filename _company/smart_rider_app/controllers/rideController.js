const Ride = require('../models/rideModel');

// 모든 라이딩 데이터 조회
exports.getAllRides = async (req, res) => {
    try {
        const rides = await Ride.find();
        res.status(200).json(rides);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch rides', error: err.message });
    }
};

// 새로운 라이딩 데이터 생성
exports.createRide = async (req, res) => {
    try {
        const newRide = new Ride({
            riderName: req.body.riderName,
            distanceKm: req.body.distanceKm,
            durationMinutes: req.body.durationMinutes,
            routeDetails: req.body.routeDetails,
            safetyReported: req.body.safetyReported || false
        });

        const ride = await newRide.save();
        res.status(201).json(ride);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create ride', error: err.message });
    }
};

// 특정 라이딩 데이터 조회
exports.getRideById = async (req, res) => {
    try {
        const ride = await Ride.findById(req.params.id);
        if (!ride) {
            return res.status(404).json({ message: 'Ride not found' });
        }
        res.status(200).json(ride);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch ride', error: err.message });
    }
};

module.exports = exports;