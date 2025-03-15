import Image from "next/image";
import { SocialIcons } from "@/components/Social-Icons";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:pl-20 sm:pr-20 ml-16 mr-16">
      <div className="bg-[rgb(42,52,73)] w-full">
        <h1 className="text-4xl font-bold text-center mt-8">
          About the project
        </h1>
        <div className="divide-y divide-gray-200">
          <div className="space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 items-center">
            <div className="prose prose-invert max-w-none pt-8 pb-8 xl:col-span-2 flex ml-10 text-justify">
              The Automated Aquarium project transforms a traditional aquarium
              into a smart IoT device, allowing users to monitor and control
              various aspects remotely.
              <br className="extra-space" />
              Key features include: <br className="extra-space" />
              Live Streaming: Broadcast real-time footage of your aquarium on platforms like
              Twitch.<br/>
              Sensor Integration: Monitor environmental parameters such
              as temperature, pH levels, and water quality through integrated
              sensors.<br/>
              Remote Management: Adjust settings and control devices
              like feeders and lights from any location. 
              <br className="extra-space" />
              The project encompasses a range of technologies, from web development to embedded systems,
              and is continually evolving. A companion website, built with
              Next.js, showcases the project&rsquo;s capabilities and provides
              comprehensive documentation to assist users in setting up and
              maintaining their automated aquariums.
            </div>
            <div className="flex flex-col items-center space-x-2 mb-8">
              <Image
                src="/aboutProject.png"
                alt="avatar"
                width={256}
                height={256}
                className="h-256 w-256 rounded-s"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(42,52,73)] w-full">
        <h1 className="text-4xl font-bold text-center mt-8">About Me</h1>
        <div className="divide-y divide-gray-200">
          <div className="space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 items-center">
            <div className="flex flex-col items-center space-x-2 pt-8 mb-8">
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
            <div className="prose prose-invert max-w-none pt-8 pb-8 xl:col-span-2 flex mr-10 h-64 text-justify">
              Joserra is a Software Engineer specializing in IoT and industrial
              automation. With a Master’s in IoT and experience at Siemens, he
              has worked extensively on full-stack software development, cloud
              integration, and industrial edge computing.
              <br className="extra-space" />
              His expertise includes developing IoT applications, implementing
              communication protocols like MQTT, and optimizing data workflows
              using Docker and Linux environments. He has contributed to
              projects involving real-time monitoring, sensor integration, and
              automation for industrial systems.
              <br className="extra-space" />
              Passionate about connected technologies and software development,
              Joserra enjoys exploring new IoT frameworks, contributing to
              open-source projects, and experimenting with Raspberry Pi and
              microcontrollers in his free time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
