"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function renderCarousel(imageUrl: string) {
  return (
    <Carousel className="w-full h-full flex items-center justify-center px-12">
      <CarouselContent>
        <CarouselItem className="w-full h-full flex items-center justify-center">
          <Card>
            <CardContent className="p-6">
              <Image
                src={imageUrl}
                width={550}
                height={550}
                alt={`generated_image`}
                className=""
              />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}

function AppTitle() {
  return (
    <>
      <h1 className="text-center font-bold tracking-tighter sm:text-5xl md:text-6xl">
        View your assets
      </h1>
    </>
  );
}

export default function CardWithForm() {
  const router = useRouter();
  const { imageUrl, prompt } = router.useSearchParams();
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [promptText, setPromptText] = useState<string>("");

  useEffect(() => {
    if (imageUrl) {
      setGeneratedImageUrl(imageUrl as string);
    }
    if (prompt) {
      setPromptText(prompt as string);
    }
  }, [imageUrl, prompt]);

  return (
    <div className="">
      <AppTitle />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="w-full h-auto flex flex-col items-center justify-center space-y-4">
          {generatedImageUrl && renderCarousel(generatedImageUrl)}
        </div>
        <form className="w-full">
          <div className="grid w-full items-center gap-4 p-10 flex-col space-y-1.5">
            <Label htmlFor="name">Prompt</Label>
            <Textarea
              id="name"
              value={promptText}
              className="h-20 text-left align-top placeholder-top placeholder-left"
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
}
