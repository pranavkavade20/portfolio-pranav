import React from 'react'

function Skill() {
return (
    <section id="skills" className=" text-[#1a1a1a] py-25 md:py-35">
      <div className="max-w-300 mx-auto px-5">
        <h2 className="text-[clamp(2.5rem,5vw,3rem)] text-white text-center mb-15 font-['Anton'] uppercase tracking-wider leading-[0.9]">TECHNICAL ARSENAL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Card 1 */}
            <div className="p-10 rounded-3xl relative overflow-hidden transition-transform duration-300 min-h-87.5 flex flex-col justify-between hover:-translate-y-1 bg-[#ff5d5d] text-white">
                <span className="font-['Anton'] text-[4rem] opacity-30 absolute -top-2.5 right-5">01</span>
                <h3 className="font-['Anton'] text-3xl uppercase tracking-wider leading-[0.9] mb-5 z-2">BACKEND <br/><br/> ENGINEERING</h3>
                <ul className="text-[1.1rem] leading-[1.8] z-2 font-medium">
                    <li className="mb-1.25">• Python</li>
                    <li className="mb-1.25">• Django & DRF</li>
                    <li className="mb-1.25">• FastAPI (Basics)</li>
                    <li className="mb-1.25">• MySQL</li>
                    <li className="mb-1.25">• MongoDB</li>
                </ul>
            </div>

            {/* Card 2 */}
            <div className="p-10 rounded-3xl relative overflow-hidden transition-transform duration-300 min-h-87.5 flex flex-col justify-between hover:-translate-y-1 bg-[#9d8afe] text-black">
                <span className="font-['Anton'] text-[4rem] opacity-30 absolute -top-2.5 right-5">02</span>
                <h3 className="font-['Anton'] text-3xl uppercase tracking-wider leading-[0.9] mb-5 z-2">FRONTEND <br/><br/> DEVELOPMENT</h3>
                <ul className="text-[1.1rem] leading-[1.8] z-2 font-medium">
                    <li className="mb-1.25">• HTML</li>
                    <li className="mb-1.25">• CSS</li>
                    <li className="mb-1.25">• JavaScript (ES6+)</li>
                    <li className="mb-1.25">• React.js</li>
                    <li className="mb-1.25">• Responsive UI/UX</li>
                </ul>
            </div>

            {/* Card 3 */}
            <div className="p-10 rounded-3xl relative overflow-hidden transition-transform duration-300 min-h-87.5 flex flex-col justify-between hover:-translate-y-1 bg-[#00dc82] text-black">
                <span className="font-['Anton'] text-[4rem] opacity-30 absolute -top-2.5 right-5">03</span>
                <h3 className="font-['Anton'] text-3xl uppercase tracking-wider leading-[0.9] mb-5 z-2">DEVOPS &<br/><br/>TOOLING</h3>
                <ul className="text-[1.1rem] leading-[1.8] z-2 font-medium">
                    <li className="mb-1.25">• Cloud Basics</li>
                    <li className="mb-1.25">• Git & GitHub</li>
                    <li className="mb-1.25">• API handling</li>
                    <li className="mb-1.25">• API Testing (Postman)</li>
                    <li className="mb-1.25">• Agile Methodologies</li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Skill