import { UserHeader } from "@/components/common/user-header";
import Image from "next/image";

export default function Library() {
  const mockCards = [
    { user: "User 1", title: "Title" },
    { user: "User 1", title: "Title 2" },
    { user: "User 1", title: "Title 3" },
    { user: "User 1", title: "Title 4" },
    { user: "User 1", title: "Title 5" },
    { user: "User 1", title: "Title" },
    { user: "User 1", title: "Title 2" },
    { user: "User 1", title: "Title 3" },
    { user: "User 1", title: "Title 4" },
    { user: "User 1", title: "Title 5" },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full bg-background">
        <div className="px-4 md:py-12 py-4 mx-auto space-y-5 text-center">
          <div className="space-y-3">
            <AppTitle />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockCards.map((card, index) => (
              <div key={index} className="rounded shadow-lg p-2">
                <Image
                  src="https://via.placeholder.com/350x150"
                  alt={card.title}
                  width={0}
                  height={0}
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {card.user}
                  </div>
                  <p className="text-gray-700 text-base">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}

function AppTitle() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Ready-to-use assets for ad-campaigns
      </h1>
      <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
        Auto-generated assets based on your company&apos;s branding or use other user&apos;s already generated content!
      </p>
    </>
  );
}