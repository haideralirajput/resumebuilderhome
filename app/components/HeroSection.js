// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/assets/images/homebg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Your Professional Resume in Minutes</h1>
          <p className="text-lg md:text-xl mb-6">Stand out with a resume that gets you noticed. Start building your career today.</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Get Started Now</a>
        </div>
      </div>
    </section>
  );
}
