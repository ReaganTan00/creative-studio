import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function renderCarousel() {
  return (
    <Carousel className="w-full h-full relative">
      <CarouselContent className="w-full h-full flex items-center justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="w-full h-full flex items-center justify-center">
            <Card className="w-full h-full">
              <CardContent className="w-full h-full flex items-center justify-center p-6">
                <div className="w-full h-full rounded-xl flex items-center justify-center">
                  <Image
                    src="/tito.svg"
                    width={550}
                    height={550}
                    alt="Hero"
                    className="object-cover rounded-xl"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}

export default function CardWithForm() {
  return (
    <div className="grid h-full w-full">
      <h1 className="text-3xl ml-10 font-bold tracking-tighter sm:text-5xl xl:text-6xl">Generation</h1>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Card className="w-full h-full">
          <CardContent className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-auto flex flex-col items-center justify-center space-y-4">
              {renderCarousel()}
            </div>
            <form className="w-full">
              <div className="grid w-full items-center gap-4 p-10">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Prompt</Label>
                  <Textarea
                    id="name"
                    placeholder="Previous prompt from input!"
                    className="h-20 text-left align-top placeholder-top placeholder-left"
                    disabled
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
