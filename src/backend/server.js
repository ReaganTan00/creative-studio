const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/generate', (req, res) => {
    const textPrompt = req.body.text_prompt;

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
            res.sendFile(imgPath, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error sending image');
                }
            });
        } else {
            res.status(500).send('Image not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
