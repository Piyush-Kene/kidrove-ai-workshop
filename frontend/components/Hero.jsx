const Hero = () => {
    return (
        <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

                <span className="inline-block bg-blue-500/15 border border-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                    4 Week Online Summer Program
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
                    AI & Robotics
                    <span className="text-blue-400"> Summer Workshop</span>
                </h1>

                <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                    Discover Artificial Intelligence,
                    Robotics, Automation and Future Technologies
                    through hands-on learning and live sessions.
                </p>

                <div className="mt-10">
                    <a href="#register" className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">
                        Enroll Now
                    </a>
                </div>

            </div>

        </section>
    );
};

export default Hero;