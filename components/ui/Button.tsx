import Link from 'next/link'

type ButtonVariant = 'primary' | 'cta' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-green-600 text-white hover:bg-green-700 border-2 border-transparent',
  cta: 'bg-amber-600 text-white hover:bg-amber-700 border-2 border-transparent',
  secondary:
    'bg-transparent text-green-600 border-2 border-green-600 hover:bg-green-50',
  ghost: 'bg-transparent text-green-600 border-2 border-transparent hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  disabled,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-bold tracking-wide transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
