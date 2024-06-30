import Image from "next/image";
import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

interface ImageInputProps {
    image: File | undefined;
    setImage: Dispatch<SetStateAction<File | undefined>>;
}

function ImageInput({ image, setImage }: ImageInputProps) {
    const [previewUrl, setPreviewUrl] = useState<string | undefined>("");

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];
        if (!file) {
            return;
        }
        setImage(file);
    };

    const handleClearImage = () => {
        setImage(undefined);
        setPreviewUrl(undefined);
    };

    useEffect(() => {
        if (!image) {
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setPreviewUrl(reader.result as string);
        };

        reader.readAsDataURL(image);
    }, [image]);

    return (
        <div className="space-y-2">
            <div className="flex w-full items-center space-x-4">
                <Label htmlFor="image-upload" className="text-lg ">
                    Image Reference
                </Label>
                {image && (
                    <div className="flex inline items-center text-muted-foreground">
                        <Label
                            htmlFor="image-upload"
                            className="text-muted-foreground text-sm"
                        >
                            {image.name}
                        </Label>
                        <Button
                            onClick={handleClearImage}
                            className="bg-transparent text-muted-foreground px-1 py-0 h-0 hover:bg-transparent hover:text-foreground m-0"
                        >
                            <ClearIcon />
                        </Button>
                    </div>
                )}
            </div>
            <label
                htmlFor="fileId"
                className="justify-center items-center flex min-h-[200px] w-full rounded-md border border-input bg-background text-sm ring-offset-background text-muted-foreground hover:text-foreground hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 "
            >
                {previewUrl ? (
                    <Image
                        src={previewUrl ?? ""}
                        alt="preview"
                        id="preview"
                        width={0}
                        height={0}
                        unoptimized
                        className="w-auto h-auto max-h-96 p-2"
                    />
                ) : (
                    <PlusIcon />
                )}
            </label>
            <input
                type="file"
                id="fileId"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
            />
        </div>
    );
}

function PlusIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

function ClearIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
}

export default ImageInput;
