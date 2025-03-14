export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 pt-32 ml-16 mr-16">
      <div className="bg-[rgb(42,52,73)] w-full h-64 flex items-center justify-center mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Automated Aquarium Project</h1>
          <p className="text-lg">This project aims to automate the maintenance and monitoring of aquariums using modern technologies.</p>
        </div>
      </div>
      <div className="bg-[rgb(42,52,73)] w-full h-64 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">I am a passionate developer with a keen interest in automation and IoT projects. This project is a testament to my dedication and skills.</p>
        </div>
      </div>
    </div>
  );
}
