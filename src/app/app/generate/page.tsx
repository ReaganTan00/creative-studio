import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";

function renderCarousel() {
  return (
    <Carousel className="w-full h-full flex items-center justify-center px-12">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="w-full h-full flex items-center justify-center">
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/tito.svg"
                  width={550}
                  height={550}
                  alt={`generate_image_${index}`}
                  className=""
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
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
  return (
    <div className="">
      <AppTitle/>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="w-full h-auto flex flex-col items-center justify-center space-y-4">
          {renderCarousel()}
        </div>
        <form className="w-full">
          <div className="grid w-full items-center gap-4 p-10 flex-col space-y-1.5">
              <Label htmlFor="name">Prompt</Label>
              <Textarea
                id="name"
                placeholder="Previous prompt from input!"
                className="h-20 text-left align-top placeholder-top placeholder-left"
                disabled
              />
          </div>
        </form>
      </div>
    </div>
  );
}
