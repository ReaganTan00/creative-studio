import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const upload = multer({ dest: 'uploads/' });

app.post('/generate', upload.single('imageFile'), (req, res) => {
    const textPrompt = req.body.textPrompt;
    const isPrivate = req.body.isPrivate === 'true';

    console.log('Received prompt:', textPrompt);
    console.log('Received isPrivate:', isPrivate);

    const process = spawn('python', ['generate_image.py', textPrompt]);

    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).send('Error generating image');
        }

        const imgPath = path.join(__dirname, 'generated_image.png');
        if (fs.existsSync(imgPath)) {
            // Assuming you're serving static files from the 'public' directory
            const imgUrl = `http://localhost:${port}/public/generated_image.png`;
            res.json({ imageUrl: imgUrl });
        } else {
            res.status(500).send('Image not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
