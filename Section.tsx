
import React from 'react'

export type SectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}

export default Section
