import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopicCreator from "@/components/TopicCreator";
import { redis } from "@/lib/redis";
import {Star} from "lucide-react"

export default async function Home() {

  const serverRequests = await redis.get("served-requests")
  // console.log(serverRequests)
  return (
    <section className="min-h-screen bg-grid-zinc-50">
      <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52 ">
        <div className="hidden lg:block absolute inset-0 top-8 ">
          {/* circle */}
        </div>
        <div className="px-6 lg:px-0 lg:pt-4 ">
          <div className="relative mx-auto text-center flex flex-col items-center">
            <h1 className="relative leading-snug w-fit tracking-tighter text-balance text-gray-900 text-5xl md:text-6xl capitalize ">
              what do you <span className="whitespace-nowrap" >th<span className="relative" >i<span className="absolute inset-x-0 -top-2 -translate-x-3 ">
                <Icons.brain className="h-7 w-7 md:h-8 md:w-8" />
              </span></span>nk</span> think about...
            </h1>
            <TopicCreator/>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5f">
                  <Star className="h-4 w-4 text-green-600 fill-green-500" />
                  <Star className="h-4 w-4 text-green-600 fill-green-500" />
                  <Star className="h-4 w-4 text-green-600 fill-green-500" />
                  <Star className="h-4 w-4 text-green-600 fill-green-500" />
                  <Star className="h-4 w-4 text-green-600 fill-green-500" />
                </div>
                <p> 
                  <span className="font-semibold" >
                    {Math.ceil(Number(serverRequests))}
                  </span>{" "}
                  Served requests
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
