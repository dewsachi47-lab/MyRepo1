import React from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost'
}

export const Button = ({ className, variant = 'default', ...props }: ButtonProps) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants: Record<string, string> = {
    default: 'bg-slate-900 text-white hover:bg-slate-700 px-4 py-2',
    outline: 'border border-slate-200 bg-white text-slate-900 px-4 py-2',
    ghost: 'bg-transparent text-slate-900 px-3 py-2'
  }
  return <button className={clsx(base, variants[variant], className)} {...props} />
}

export default Button
