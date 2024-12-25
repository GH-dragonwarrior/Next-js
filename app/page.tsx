'use client'
import { useState, useEffect } from 'react'
import Navigation from '@/app/components/Navigation'
import ProcessTimeline from '@/app/components/ProcessTimeline/ProcessTimeline'
import FAQ from '@/app/components/FAQ'
import ContactForm from '@/app/components/ContactForm'
import MaterialSection from '@/app/components/MaterialSection'
// import FileUpload from '@/components/FileUpload'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

  const handleFileSelect = (file: File) => {
    // Handle file selection
    console.log('File selected:', file)
  }

  const handleUploadComplete = (response: any) => {
    // Handle upload completion
    console.log('Upload complete:', response)
  }

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${
      isPageLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      <Navigation activeSection={activeSection} />
      
      <section id="hero" className="relative pt-16">
      </section>

      <section id="process" className="py-24">
        <ProcessTimeline />
      </section>

      <section id="materials" className="py-24 bg-gray-50">
        <MaterialSection />
      </section>

      <section id="faq" className="py-24">
        <FAQ />
      </section>

      <section id="contact" className="py-24 bg-gray-50">
        <ContactForm />
      </section>
    </div>
  )
}
