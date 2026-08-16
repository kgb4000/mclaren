'use client'
import Link from 'next/link'
import posthog from 'posthog-js'
import { twMerge } from 'tailwind-merge'

const BASE =
  'block w-fit max-w-full mx-auto my-8 text-center border-[3px] border-gold bg-transparent px-[1.2rem] py-4 text-[1.2rem] font-semibold uppercase text-gold transition-colors cursor-pointer hover:bg-gold hover:text-black md:px-10 md:py-6'

export default function Button({
  href,
  className = '',
  children,
  onClick,
  posthogEvent,
  posthogProperties,
  ...props
}) {
  const classes = twMerge(BASE, className)

  const handleClick = (e) => {
    if (posthogEvent) {
      posthog.capture(posthogEvent, posthogProperties)
    }
    if (onClick) onClick(e)
  }

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} onClick={handleClick} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className={classes} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
