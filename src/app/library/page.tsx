import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <UserHeader />
            <div className="flex min-h-[100dvh] p-12">
                <Tabs className="flex px-8 md:px-12">
                    <TabsList className="flex mr-4">
                        <TabsTrigger value="Creative-Studio">Home</TabsTrigger>
                        <TabsTrigger value="Library">Library</TabsTrigger>
                    </TabsList>
                    <TabsContent
                        value="Library"
                        className="flex flex-wrap justify-start overflow-auto h-4/5"
                    >
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
                    </TabsContent>
                    <TabsContent value="Creative-Studio">Home</TabsContent>
                </Tabs>
            </div>
        </>
    );
}