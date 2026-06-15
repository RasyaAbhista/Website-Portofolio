import { Github, Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-black overflow-hidden py-24 lg:py-32">

      <style>{`
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-animate {
          opacity: 0;
          animation: contactFadeUp 0.6s cubic-bezier(0.25,0.1,0.25,1) forwards;
        }
      `}</style>

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">

        <div className="text-center mb-14">
          <div className="contact-animate flex items-center justify-center gap-3 mb-5" style={{ animationDelay: '0ms' }}>
            <span className="h-px w-10 bg-gray-600" />
            <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">Get In Touch</span>
            <span className="h-px w-10 bg-gray-600" />
          </div>
          <h2 className="contact-animate text-5xl md:text-6xl font-bold text-white font-poppins mb-3" style={{ animationDelay: '100ms' }}>
            Contact.
          </h2>
          <p className="contact-animate text-gray-600 text-sm font-poppins tracking-wide" style={{ animationDelay: '180ms' }}>
            Let's work together — reach out anytime.
          </p>
        </div>

        <div className="contact-animate relative" style={{ animationDelay: '250ms' }}>
          <span className="absolute -top-3 -left-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -top-3 -right-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -bottom-3 -left-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -bottom-3 -right-3 w-3 h-3 bg-white z-10" />
          <div className="absolute inset-0 border border-white/20 pointer-events-none" />

          <div className="px-8 py-14 md:px-14 md:py-16 flex flex-col lg:flex-row gap-12 lg:gap-0">

            <div className="flex-1 flex flex-col justify-center lg:pr-14 lg:border-r border-white/10">
              <p className="font-poppins text-xs tracking-[3px] text-gray-500 uppercase mb-4">Open to opportunities</p>
              <h3 className="font-poppins font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
                Have a project<br />in mind?
              </h3>
              <p className="font-poppins text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs some creative touch, let's talk.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:rasyabaswara7@gmail.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-poppins font-medium text-sm hover:bg-gray-200 transition-colors">
                  Send Email
                </a>
                <a href="https://wa.me/6289601191094" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 font-poppins font-medium text-sm hover:border-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center lg:pl-14 gap-4">

              <a href="mailto:rasyabaswara7@gmail.com" className="group flex items-center gap-5 p-5 border border-white/10 hover:border-white/30 transition-colors" style={{ background: '#0a0a0a' }}>
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors" style={{ background: '#111' }}>
                  <Mail size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-poppins text-[9px] tracking-[2px] uppercase text-gray-500 mb-1">Email</p>
                  <p className="font-poppins text-sm text-white">rasyabaswara7@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/rasya-abhista-indrabaswara/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-5 border border-white/10 hover:border-white/30 transition-colors" style={{ background: '#0a0a0a' }}>
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors" style={{ background: '#111' }}>
                  <Linkedin size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-poppins text-[9px] tracking-[2px] uppercase text-gray-500 mb-1">LinkedIn</p>
                  <p className="font-poppins text-sm text-white">rasya-abhista-indrabaswara</p>
                </div>
              </a>

              <a href="https://github.com/RasyaAbhista" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-5 border border-white/10 hover:border-white/30 transition-colors" style={{ background: '#0a0a0a' }}>
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors" style={{ background: '#111' }}>
                  <Github size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-poppins text-[9px] tracking-[2px] uppercase text-gray-500 mb-1">GitHub</p>
                  <p className="font-poppins text-sm text-white">RasyaAbhista</p>
                </div>
              </a>

              <a href="https://wa.me/6289601191094" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-5 border border-white/10 hover:border-white/30 transition-colors" style={{ background: '#0a0a0a' }}>
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors" style={{ background: '#111' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-white">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.84.5 3.56 1.36 5.03L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.07a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.4a8.14 8.14 0 0 1 2.41 5.8c0 4.52-3.7 8.22-8.19 8.22zm4.49-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-1.45-.72-2.4-1.29-3.36-2.93-.25-.44.25-.41.72-1.36.08-.17.04-.31-.04-.43-.08-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14 0-.31 0-.48 0-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.16 1.76 2.69 4.27 3.66 2.04.8 2.46.64 2.9.6.44-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-poppins text-[9px] tracking-[2px] uppercase text-gray-500 mb-1">WhatsApp</p>
                  <p className="font-poppins text-sm text-white">+62 896-0119-1094</p>
                </div>
              </a>

            </div>
          </div>
        </div>

        <p className="contact-animate text-center font-poppins text-[10px] tracking-[2px] text-gray-700 uppercase mt-16" style={{ animationDelay: '400ms' }}>
          Rasya Abhista Indrabaswara &mdash; 2026
        </p>

      </div>
    </section>
  )
}
