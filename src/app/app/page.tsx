import GeneratorInputs from "@/components/app/GeneratorInputs";

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-background">
            <div className="max-w-3xl px-4 py-12 mx-auto space-y-5 text-center">
                <div className="space-y-3">
                    <AppTitle />
                </div>
                <GeneratorInputs />
            </div>
        </div>
    );
};

function AppTitle() {
    return (
        <>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                AI-Powered Asset Generator
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Create stunning business assets with the power of generative AI.
                Simply provide a text prompt and an image reference, and let our
                AI do the rest.
            </p>
        </>
    );
}

export default App;
