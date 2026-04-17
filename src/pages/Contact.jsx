import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Code2, Github, Linkedin, Youtube, Twitter, Send, Check, ArrowUp, Loader2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_wyfa5uj'
const EMAILJS_TEMPLATE_ID = 'template_6makwq9'
const EMAILJS_PUBLIC_KEY = '0ExJd1jmU470SGbiN'
import SectionWrapper from '../components/SectionWrapper'
import LeatherDiamondBackground from '../components/LeatherDiamondBackground'
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'manan.jani.cg@gmail.com', href: 'mailto:manan.jani.cg@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 6353061200', href: 'tel:+916353061200' },
  { icon: MapPin, label: 'Location', value: 'India (Available for remote work)', href: null },
]
const socialLinks = [
  { icon: Code2, url: 'https://leetcode.com/u/mananjani', label: 'LeetCode' },
  { icon: Github, url: 'https://github.com/mananjani2102', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/manan-jani-1a22443a3/', label: 'LinkedIn' },
  { icon: Youtube, url: 'https://youtube.com/@mananjani2102', label: 'YouTube' },
  { icon: Twitter, url: 'https://x.com/Mananjani2102', label: 'X' },
]
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)
  const maxMessage = 500
  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'message' && value.length > maxMessage) return
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
      {[
        { name: 'name', label: 'Your Name', type: 'text', placeholder: '* NAME *' },
        { name: 'email', label: 'Your Email', type: 'email', placeholder: '* EMAIL *' },
        { name: 'subject', label: 'Subject', type: 'text', placeholder: '* SUBJECT *' },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-brown-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="w-full bg-brown-900/60 backdrop-blur-sm border border-brown-700/50 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-cream-100 placeholder-brown-600 text-sm font-mono placeholder:tracking-widest outline-none transition-all duration-300 focus:border-accent-gold/50 focus:shadow-[0_0_15px_rgba(201,169,110,0.1)]"
          />
          <AnimatePresence>
            {errors[field.name] && (
              <motion.p
                className="text-red-400/80 text-xs mt-1.5 font-mono"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {errors[field.name]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div>
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <label className="text-brown-300 text-xs sm:text-sm font-medium">Message</label>
          <span className={`text-xs font-mono transition-colors ${formData.message.length > maxMessage * 0.9 ? 'text-red-400/80' : 'text-brown-600'}`}>
            {formData.message.length}/{maxMessage}
          </span>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="* MESSAGE *"
          rows={4}
          className="w-full bg-brown-900/60 backdrop-blur-sm border border-brown-700/50 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-cream-100 placeholder-brown-600 text-sm font-mono placeholder:tracking-widest outline-none transition-all duration-300 focus:border-accent-gold/50 focus:shadow-[0_0_15px_rgba(201,169,110,0.1)] resize-none"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              className="text-red-400/80 text-xs mt-1.5 font-mono"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="group relative w-full py-3.5 sm:py-4 rounded-2xl font-semibold text-sm overflow-hidden transition-all duration-300 disabled:opacity-70 active:scale-[0.99]"
        data-cursor="Send"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-gold to-accent-copper" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-copper to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 flex items-center justify-center gap-2 text-brown-950">
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Send Message <Send size={16} />
              </motion.span>
            )}
            {status === 'loading' && (
              <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Loader2 size={18} className="animate-spin" />
              </motion.span>
            )}
            {status === 'success' && (
              <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                Message Sent <Check size={16} />
              </motion.span>
            )}
            {status === 'error' && (
              <motion.span key="error" className="flex items-center gap-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                Failed to Send <AlertCircle size={16} />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>
    </form>
  )
}
export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <SectionWrapper id="contact" className="!pb-0">
      <LeatherDiamondBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          className="mb-16 sm:mb-20 md:mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-gold font-mono text-sm tracking-widest uppercase mb-4">05 / Contact</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-brown-200 text-lg sm:text-xl leading-relaxed">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] gap-10 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-lg sm:text-xl text-cream-100 mb-4 sm:mb-6">Get In Touch</h3>
            <p className="text-brown-300 text-sm leading-relaxed mb-6 sm:mb-10">
              Whether you have a project in mind, want to collaborate, or just want
              to say hi, I'd love to hear from you. I typically respond within 24 hours.
            </p>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brown-900/50 border border-brown-800/50 flex items-center justify-center shrink-0">
                    <info.icon size={15} className="text-accent-gold" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-brown-500 text-xs font-mono uppercase tracking-wide mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-cream-200 text-sm hover:text-accent-gold transition-colors duration-300 break-all" data-cursor={info.label}>
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-cream-200 text-sm">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mb-6 sm:mb-10">
              <p className="text-brown-500 text-xs font-mono uppercase tracking-wide mb-3 sm:mb-4">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-cursor={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brown-900/50 border border-brown-800/50 flex items-center justify-center text-brown-400 hover:text-accent-gold hover:border-accent-gold/30 hover:-translate-y-1 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <social.icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
        <motion.footer
          className="mt-12 sm:mt-16 md:mt-24 pt-6 sm:pt-10 pb-6 sm:pb-8 border-t border-brown-800/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brown-600 text-xs sm:text-sm text-center sm:text-left">
              &copy; 2026 Manan Jani. Crafted with React & Tailwind CSS.
            </p>
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full border border-brown-700/50 flex items-center justify-center text-brown-500 hover:text-accent-gold hover:border-accent-gold/30 transition-all duration-300 shrink-0"
              aria-label="Back to top"
              data-cursor="Back to Top"
            >
              <div className="arrow-bounce">
                <ArrowUp size={24} />
              </div>
            </button>
          </div>
        </motion.footer>
      </div>
    </SectionWrapper>
  )
}
