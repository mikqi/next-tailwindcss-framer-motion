import React from 'react'
import styles from './button.module.css'

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
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  children,
  ...props
}) => {
  const mode = primary ? styles['btn--primary'] : styles['btn--secondary']
  return (
    <button
      type="button"
      className={[styles.btn, styles[`btn--${size}`], mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label || children}
    </button>
  )
}
