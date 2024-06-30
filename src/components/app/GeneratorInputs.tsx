"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import ImageInput from "./ImageInput";
import PromptInput from "./PromptInput";

const AssetGenerator = () => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState<File>();
    const [isPrivate, setIsPrivate] = useState(false);
    const handleGenerate = () => {
        const jsonData = {
            prompt,
            isPrivate,
        };

        const formData = new FormData();

        formData.append("imageFile", image ?? "");
        formData.append("jsonData", JSON.stringify(jsonData));
        console.log("jsontData: ", formData.get("jsonData"));
        console.log("imageFile: ", formData.get("imageFile"));
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
