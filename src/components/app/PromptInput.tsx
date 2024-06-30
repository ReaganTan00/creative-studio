import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface PromptInputProps {
    setPrompt: Dispatch<SetStateAction<string>>;
}

function PromptInput({ setPrompt }: PromptInputProps) {
    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };
    return (
        <div className="space-y-2">
            <div className="flex w-full justify-start align-end">
                <Label htmlFor="prompt" className="text-lg">
                    Prompt
                </Label>
            </div>
            <Textarea
                id="prompt"
                name="prompt"
                placeholder="Describe the asset you want to create..."
                rows={4}
                className="resize-none"
                onChange={handlePromptChange}
            />
        </div>
    );
}

export default PromptInput;
