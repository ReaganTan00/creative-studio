"use client";

import { useState, FormEvent } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import ImageInput from "./ImageInput";
import PromptInput from "./PromptInput";
import { useRouter } from "next/router";

const AssetGenerator = () => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState<File | undefined>(undefined);
    const [isPrivate, setIsPrivate] = useState(false);
    const router = useRouter();

    const handleGenerate = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imageFile", image ?? "");
        formData.append("textPrompt", prompt);
        formData.append("isPrivate", isPrivate.toString());

        console.log("jsonData: ", formData.get("jsonData"));
        console.log("imageFile: ", formData.get("imageFile"));

        const response = await fetch('http://localhost:3001/app/generate', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.imageUrl;
            router.push({
                pathname: "/app/generate",
                query: { imageUrl, prompt },
            });
        } else {
            console.error('Error generating image');
        }
    };

    const handleCheckChange = (checked: boolean) => {
        setIsPrivate(checked);
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <ImageInput image={image} setImage={setImage} />
                <PromptInput setPrompt={setPrompt} />
            </div>
            <div className="flex items-center space-x-2">
                <Switch
                    id="is-private"
                    checked={isPrivate}
                    onCheckedChange={handleCheckChange}
                />
                <Label htmlFor="is-private">Is Private</Label>
            </div>
            <Button className="w-full" onClick={handleGenerate}>
                Generate Asset
            </Button>
        </>
    );
};

export default AssetGenerator;
