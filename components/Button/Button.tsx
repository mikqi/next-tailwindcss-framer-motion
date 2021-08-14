import React from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Button contents
   */
  label?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const buttonSize = {
  sm: 'px-4 py-1 text-sm;',
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'md',
  backgroundColor,
  label,
  children,
  ...props
}) => {
  const classes = clsx(
    'inline-block font-sans font-bold leading-none rounded-lg cursor-pointer',
    buttonSize[size],
    primary ? 'text-white bg-blue-500' : 'text-blue-500 bg-transparent border border-blue-500'
  )
  return (
    <button type="button" className={classes} style={{ backgroundColor }} {...props}>
      {label || children}
    </button>
  )
}
