import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Image from "next/image";
import { UserHeader } from "@/components/common/user-header";

export default function Library() {
    const mockCards = [
        { id: '1', user: 'User 1', title: 'Title'},
        { id: '2', user: 'User 1', title: 'Title 2'},
        { id: '3', user: 'User 1', title: 'Title 3'},
        { id: '4', user: 'User 1', title: 'Title 4'},
        { id: '5', user: 'User 1', title: 'Title 5'},
        { id: '6', user: 'User 1', title: 'Title'},
        { id: '7', user: 'User 1', title: 'Title 2'},
        { id: '8', user: 'User 1', title: 'Title 3'},
        { id: '9', user: 'User 1', title: 'Title 4'},
        { id: '10', user: 'User 1', title: 'Title 5'},
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
                <TabsContent value="Library" className="flex flex-wrap justify-start overflow-auto h-4/5">
                {mockCards.map(card => (
                    <div key={card.id} className="rounded shadow-lg p-2">
                        <img className="w-full" src='https://via.placeholder.com/350x150' alt={card.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{card.user}</div>
                            <p className="text-gray-700 text-base">{card.title}</p>
                        </div>
                    </div>
                ))}
                </TabsContent>
                <TabsContent value="Creative-Studio">   
                Home
                </TabsContent>
            </Tabs>
        </div>
      </>
    )
}