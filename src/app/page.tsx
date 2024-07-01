import { SiteHeader } from "@/components/common/site-header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-col min-h-[100dvh] pb-12 md:pb-0">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] lg:px-44 md:px-36 px-0">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Generate Marketing Assets
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Our AI-powered tool transforms your photos into beautiful social media posts, banner ads, and
                      product images.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="/creative-studio/generate"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Try it out!
                    </Link>
                  </div>
                </div>
                <Image src="/tito.svg"
                  width="450"
                  height="450"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
              </div>
            </div>
          </section>
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container md:px-40 px-0">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Stunning Marketing Assets
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        See examples of the beautiful social
                                        media posts, banner ads, and product
                                        images our tool can generate for you.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <Image
                                        src="/tito.svg"
                                        width="550"
                                        height="550"
                                        alt="Hero"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Social Media Post
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <Image
                                        src="/tito.svg"
                                        width="550"
                                        height="550"
                                        alt="Hero"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Banner Ad
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <Image
                                        src="/tito.svg"
                                        width="550"
                                        height="550"
                                        alt="Hero"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Product Image
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                        Key Features
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Unleash Your Creative Potential
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Visuals AI empowers you to create
                                        stunning marketing assets with ease.
                                        Upload your photos and let our
                                        AI-powered platform handle the rest.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                                <Image
                                    src="/tito.svg"
                                    width="550"
                                    height="550"
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                                />
                                <div className="flex flex-col justify-center space-y-4">
                                    <ul className="grid gap-6">
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">
                                                    Photo Upload
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    Easily upload your photos to
                                                    the platform and let Visuals
                                                    AI work its magic.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">
                                                    Asset Generation
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    Visuals AI will
                                                    automatically generate a
                                                    variety of marketing assets
                                                    based on your uploaded
                                                    photos.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">
                                                    Customization
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    Tailor the generated assets
                                                    to your brand by adjusting
                                                    colors, layouts, and more.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-muted-foreground">
                        &copy; 2024 Acme Marketing Assets. All rights reserved.
                    </p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link
                            href="#"
                            className="text-xs hover:underline underline-offset-4"
                            prefetch={false}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-xs hover:underline underline-offset-4"
                            prefetch={false}
                        >
                            Privacy
                        </Link>
                    </nav>
                </footer>
            </div>
        </>
    );
}
