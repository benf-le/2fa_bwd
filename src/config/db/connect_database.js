// import { connect: connect1 } = require('mongoose');


import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://benf_le:jp9K5QmR7J4cFzM6@cluster0.9vxnujf.mongodb.net/?retryWrites=true&w=majority',
        );

        console.log('\nConnected to DataBase');
    } catch (err) {
        console.log('Disconnect');
    }
}

export { connect }





