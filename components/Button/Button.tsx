import clsx from 'clsx'
import * as React from 'react'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary' | 'white' | 'danger'
  /**
   * How large should the button be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Button contents
   */
  label?: string
  /**
   * Optional click handler
   */
  onClick?: () => void

  leftIcon?: React.FunctionComponent<React.ComponentProps<'svg'>>
  rightIcon?: React.FunctionComponent<React.ComponentProps<'svg'>>
  children?: React.ReactNode
}

const buttonSize = {
  xs: 'px-2.5 py-1.5 text-xs font-medium rounded',
  sm: 'px-3 py-2 text-sm leading-4 rounded-md',
  md: 'px-4 py-2 text-sm font-medium rounded-md',
  lg: 'px-4 py-2 text-base font-medium rounded-md',
  xl: 'px-6 py-3 text-base font-medium rounded-md',
}

const variants = {
  primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
  secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  white: 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50',
  danger: 'text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500',
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const classes = clsx(
    'inline-flex items-center  border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    buttonSize[size],
    variants[variant]
  )
  return (
    <button type="button" className={classes} {...props}>
      {leftIcon &&
        React.createElement(leftIcon, {
          className:
            size === 'xs' ? '-ml-0.5 mr-2 h-4 w-4' : '-ml-1 mr-2 h-5 w-5',
        })}

      {label || children}

      {rightIcon &&
        React.createElement(rightIcon, {
          className:
            size === 'xs' ? 'ml-2 -mr-0.5 h-4 w-4' : 'ml-2 -mr-1 h-5 w-5',
        })}
    </button>
  )
}
