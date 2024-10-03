// components/Testimonials.js
export default function Testimonials() {
    return (
      <>
        {/* Testimonials Section */}
        <section className="bg-blue-200 py-12 px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="mb-8">
            <p className="text-lg italic text-gray-700">
              This resume builder is super easy to use and helped me land my dream job!
            </p>
            <span className="block mt-2 text-gray-800 font-semibold">– John Doe</span>
          </div>
          <div>
            <p className="text-lg italic text-gray-700">
              The templates are great and I love how fast I could create a professional resume.
            </p>
            <span className="block mt-2 text-gray-800 font-semibold">– Jane Smith</span>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer className="bg-white py-6 text-center text-gray-700">
          <p>&copy; 2024 Resume Builder. All Rights Reserved.</p>
        </footer>
      </>
    );
  }
  