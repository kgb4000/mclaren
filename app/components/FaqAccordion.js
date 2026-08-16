'use client'
import { useState } from 'react'

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#333] py-4 first:pt-0">
      <h3 className="m-0">
        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-expanded={open}
          className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-[1.15rem] font-bold"
        >
          <span>{question}</span>
          <span className="shrink-0 text-2xl leading-none text-gold">
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>
      {open && <p className="mt-3 mb-0">{answer}</p>}
    </div>
  )
}

export default function FaqAccordion({ faqs }) {
  return (
    <div>
      {faqs.map((faq, i) => (
        <AccordionItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
