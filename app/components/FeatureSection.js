// components/FeatureSection.js
export default function FeatureSection() {
    return (
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">On-The-Fly Creative Resume and CV Builder</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-64">
            <i className="fas fa-file-alt text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Produces High-Quality Resume Content</h3>
            <p>Expertly crafted resumes that meet modern standards and impress top employers globally.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-64">
            <i className="fas fa-lightbulb text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Offers Helpful Suggestions</h3>
            <p>Get smart suggestions powered by AI to improve your resume and secure more interviews.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-64">
            <i className="fas fa-rocket text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Increased Resume Productivity</h3>
            <p>Create your resume faster and more efficiently, ensuring professional results in just minutes.</p>
          </div>
        </div>
      </section>
    );
  }
  