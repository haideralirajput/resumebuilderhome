import Image from 'next/image';

export default function FeaturedTemplates() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Featured Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-md">
          <Image
            src="/assets/images/demo-1.png"
            alt="Template 1"
            width={300}
            height={400}
            className="mb-4 object-cover w-full h-64 md:h-auto" // Set width and height to be responsive
          />
          <a href="/templates.html" className="text-blue-500 hover:underline">Choose Template</a>
        </div>
        <div className="bg-white p-6 shadow-md">
          <Image
            src="/assets/images/demo-2.png"
            alt="Template 2"
            width={300}
            height={400}
            className="mb-4 object-cover w-full h-64 md:h-auto" // Set width and height to be responsive
          />
          <a href="/templates.html" className="text-blue-500 hover:underline">Choose Template</a>
        </div>
        <div className="bg-white p-6 shadow-md">
          <Image
            src="/assets/images/demo-3.png"
            alt="Template 3"
            width={300}
            height={400}
            className="mb-4 object-cover w-full h-64 md:h-auto" // Set width and height to be responsive
          />
          <a href="/templates.html" className="text-blue-500 hover:underline">Choose Template</a>
        </div>
      </div>
    </section>
  );
}
