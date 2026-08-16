import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const BASE =
  'block w-fit max-w-full mx-auto my-8 text-center border-[3px] border-gold bg-transparent px-[1.2rem] py-4 text-[1.2rem] font-semibold uppercase text-gold transition-colors cursor-pointer hover:bg-gold hover:text-black md:px-10 md:py-6'

export default function Button({ href, className = '', children, ...props }) {
  const classes = twMerge(BASE, className)

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
