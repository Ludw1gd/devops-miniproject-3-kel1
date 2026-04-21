const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('🚀 CI/CD Pipeline Berhasil! Aplikasi berjalan dengan aman.');
});

// Endpoint untuk smoke test post-deployment
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});