
import express from 'express';

export default function setupServer() {
    const app = express();

    app.get('/', (req, res) => {
        res.json({
            message: 'Hello world!',
        });
    });

    const PORT = 3000;

    app.use((req, res, next) => {
        console.log(`Time: ${new Date().toLocaleString()}`);
        next();
    });

    app.use(express.json());

    app.use((err, req, res, next) => {
        res.status(404).json({
            message: 'Not found',
        });
        next();
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};


