import productifyImg from '../../assets/productify.png';
import farmketImg from '../../assets/farmket.png';

function Project() {
    return (
    <section id="projects" className="bg-neutral-950 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5">
        
        {/* Project 1 */}
        <div className="bg-neutral-900 rounded-3xl p-6 md:p-10 mb-8 md:mb-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center border border-neutral-800">
            <div className="project-info">
                <span className="text-green-400 font-['Anton'] text-xl mb-6 block">AI / MACHINE LEARNING</span>
                <h3 className="text-4xl md:text-5xl mb-3 text-white font-['Anton'] uppercase tracking-wider leading-none">AI RECIPE ASSISTANT</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    A machine-learning powered culinary engine. Leveraged <strong>Scikit-Learn</strong> and
                    <strong>FAISS</strong> to deliver sub-second recipe recommendations based on user preferences.
                </p>
                <div className="flex gap-2.5 flex-wrap mb-6">
                    {['Python', 'Django', 'DRF', 'JavaScript', 'Tailwind', 'AI & ML'].map(tag => (
                        <span key={tag} className="border border-neutral-700 px-3 py-1.5 rounded-md text-xs text-gray-400">{tag}</span>
                    ))}
                </div>
                <a href="https://github.com/pranavkavade20/Recipy" className="border border-white/20 text-white bg-white/5 hover:bg-white hover:text-black inline-flex items-center gap-2.5 px-8 py-3 rounded-full font-bold uppercase text-xs cursor-pointer transition-transform duration-200">VIEW CODE</a>
            </div>
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative border border-neutral-700 order-first lg:order-last before:content-['•••'] before:absolute before:top-0 before:left-0 before:w-full before:h-6 before:bg-neutral-800 before:text-neutral-500 before:text-xl before:leading-none before:pl-2.5 before:tracking-widest before:z-10">
                <iframe src="https://drive.google.com/file/d/1V2SJyqkgycLODRvdd4tYYzgDNGcB7tHx/preview" className="w-full h-[calc(100%-1.5rem)] mt-6 object-cover" allow="autoplay" loading="lazy"></iframe>
            </div>
        </div>

        {/* Project 2 */}
        <div className="bg-neutral-900 rounded-3xl p-6 md:p-10 mb-8 md:mb-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center border border-neutral-800">
            <div className="project-info">
                <span className="text-green-400 font-['Anton'] text-xl mb-6 block">FULL STACK WEB APP</span>
                <h3 className="text-4xl md:text-5xl mb-3 text-white font-['Anton'] uppercase tracking-wider leading-none">PRODUCT MANAGER</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Built a responsive Product Manager to master React Hooks and state management, ensuring smooth user interactions.
                </p>
                <div className="flex gap-2.5 flex-wrap mb-6">
                    {['React', 'FastAPI', 'Python'].map(tag => (
                        <span key={tag} className="border border-neutral-700 px-3 py-1.5 rounded-md text-xs text-gray-400">{tag}</span>
                    ))}
                </div>
                <a href="https://github.com/pranavkavade20/productify" className="border border-white/20 text-white bg-white/5 hover:bg-white hover:text-black inline-flex items-center gap-2.5 px-8 py-3 rounded-full font-bold uppercase text-xs cursor-pointer transition-transform duration-200">VIEW CODE</a>
            </div>
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative border border-neutral-700 order-first lg:order-last before:content-['•••'] before:absolute before:top-0 before:left-0 before:w-full before:h-6 before:bg-neutral-800 before:text-neutral-500 before:text-xl before:leading-none before:pl-2.5 before:tracking-widest before:z-10">
                <img src={productifyImg} alt="Productify" className="w-full h-[calc(100%-1.5rem)] mt-6 object-cover" />
            </div>
        </div>

        {/* Project 3 */}
        <div className="bg-neutral-900 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center border border-neutral-800">
            <div className="project-info">
                <span className="text-green-400 font-['Anton'] text-xl mb-6 block">REAL-TIME SYSTEMS</span>
                <h3 className="text-4xl md:text-5xl mb-3 text-white font-['Anton'] uppercase tracking-wider leading-none">FARMKET</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    A real-time B2B marketplace. Engineered a low-latency chat system and optimized <strong>MySQL</strong> indexing.
                </p>
                <div className="flex gap-2.5 flex-wrap mb-6">
                    {['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'].map(tag => (
                        <span key={tag} className="border border-neutral-700 px-3 py-1.5 rounded-md text-xs text-gray-400">{tag}</span>
                    ))}
                </div>
                <a href="#" className="border border-white/20 text-white bg-white/5 hover:bg-white hover:text-black inline-flex items-center gap-2.5 px-8 py-3 rounded-full font-bold uppercase text-xs cursor-pointer transition-transform duration-200">VIEW CODE</a>
            </div>
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative border border-neutral-700 order-first lg:order-last before:content-['•••'] before:absolute before:top-0 before:left-0 before:w-full before:h-6 before:bg-neutral-800 before:text-neutral-500 before:text-xl before:leading-none before:pl-2.5 before:tracking-widest before:z-10">
                <img src={farmketImg} alt="FARMKET" className="w-full h-[calc(100%-1.5rem)] mt-6 object-cover" />
            </div>
        </div>

      </div>
    </section>
  );
}

export default Project