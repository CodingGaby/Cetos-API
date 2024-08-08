import express from 'express';
import fs from 'fs';
import csv from 'csv-parser';

const app = express();
const PORT = 3001;

let bpData = [];

// Middleware to process incoming JSON data
app.use(express.json());

// Function to read and process the CSV file
const parseCSV = () => {
    fs.createReadStream('prueba.csv')
        .pipe(csv())
        .on('data', (row) => {
            bpData.push(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
};

// Start reading the CSV file
parseCSV();

// Route to get all Business Partner data
app.get('/all-bp', (req, res) => {
    res.json(bpData);   
});

// Route to get information about a specific Business Partner
app.get('/bp', (req, res) => {
    const businessPartnerId = req.query.id;
    const bpInfo = bpData.find(bp => bp.Partner === businessPartnerId);
    
    if (bpInfo) {
        res.json(bpInfo);
    } else {
        res.status(404).json({ message: 'Business Partner not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
