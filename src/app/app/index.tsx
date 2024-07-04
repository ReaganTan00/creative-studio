import { useState, FormEvent } from 'react';

export default function Home() {
    const [textPrompt, setTextPrompt] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text_prompt: textPrompt }),
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setImageSrc(url);
        } else {
            console.error('Error generating image');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={textPrompt}
                    onChange={(e) => setTextPrompt(e.target.value)}
                    placeholder="Enter a prompt"
                    required
                />
                <button type="submit">Generate Image</button>
            </form>
            {imageSrc && <img src={imageSrc} alt="Generated Image" />}
        </div>
    );
}
