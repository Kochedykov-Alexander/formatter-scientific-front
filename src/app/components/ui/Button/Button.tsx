import { FC, SVGProps } from 'react'
import cn from 'classnames'

import styles from './Button.module.scss'

type ButtonProps = JSX.IntrinsicElements['button'] & {
	variant?: 'contained' | 'text' | 'outlined'
	color?: 'primary' | 'secondary'
	startIcon?: SVGProps<SVGElement>
	endIcon?: SVGProps<SVGElement>
}

export const Button: FC<ButtonProps> = ({
	children,
	variant = 'contained',
	color = 'primary',
	className,
	startIcon,
	endIcon,
	...props
}) => {
	return (
		<button
			className={cn(
				styles.button,
				styles[`button__${variant}`],
				styles[`button__${variant}_${color}`],
				className
			)}
			{...props}
		>
			<div className={cn(styles.button__icon, { [styles._start]: startIcon })}>{startIcon}</div>
			<div className={styles.button__content}>{children}</div>
			<div className={cn(styles.button__icon, { [styles._end]: endIcon })}>{endIcon}</div>
		</button>
	)
}
