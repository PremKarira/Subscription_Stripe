const mongoose = require('mongoose');

const users = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    subscription: {
        plan: { type: String },
        interval: { type: String },
        subscriptionId: { type: String },
    },
}, {
    timestamps: true
});
// ItemSchema.set('timestamps', true);

module.exports = mongoose.model('Users', users);