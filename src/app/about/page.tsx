import Image from "next/image";
import { SocialIcons } from "@/components/Social-Icons";
import AboutProject from "@/content/about/about-project.mdx";
import AboutMe from "@/content/about/about-me.mdx";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 pb-12 sm:pb-20 gap-8 sm:gap-16">
      {/* About the Project Section */}
      <div className="bg-[rgb(42,52,73)] w-full rounded-lg">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mt-8">
          About the project
        </h1>
        <div className="divide-y divide-gray-200">
          <div className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-x-8 items-center p-4 sm:p-8">
            <div className="prose prose-invert max-w-none pt-8 pb-8 xl:col-span-2 text-justify">
              <AboutProject />
            </div>
            <div className="flex flex-col items-center pt-8 pb-8">
              <Image
                src="/aboutProject.png"
                alt="avatar"
                width={256}
                height={256}
                className="h-48 w-48 sm:h-64 sm:w-64 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-[rgb(42,52,73)] w-full rounded-lg">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mt-8">About Me</h1>
        <div className="divide-y divide-gray-200">
          <div className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-x-8 items-center p-4 sm:p-8">
            <div className="flex flex-col items-center pt-8 pb-8">
              <Image
                src="/aboutMe.png"
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
              <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">
                Joserra
              </h3>
              <div className="text-gray-400">
                SW Developer | MSc in IoT & Telecommunications Engineer
              </div>
              <div className="flex space-x-3 pt-6">
                <SocialIcons />
              </div>
            </div>
            <div className="prose prose-invert max-w-none pt-8 pb-8 xl:col-span-2 text-justify">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}