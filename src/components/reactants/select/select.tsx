import * as SelectPrimitive from '@radix-ui/react-select'
import { cx } from 'class-variance-authority'
import * as React from 'react'
import { Check, ChevronDown } from 'react-feather'
import styles from './select.module.css'
import { LayoutProps, useLayoutProps } from '../../utils'

export interface SelectProps extends SelectPrimitive.SelectProps, LayoutProps {
  placeholder?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function Select({ placeholder, children, style, className, ...props }: SelectProps) {
  const { layoutClassName, cleanedRest } = useLayoutProps(props)

  return (
    <div className={cx(className, layoutClassName)} style={style}>
      <SelectPrimitive.Root {...cleanedRest}>
        <SelectPrimitive.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 data-[placeholder]:text-violet9 outline-none">
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon className={styles.icon}>
            <ChevronDown size={15} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <SelectPrimitive.Viewport className={styles.viewport}>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectPrimitive.SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item ref={forwardedRef} className={cx(styles.item, className)} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles.check}>
        <Check size={15} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})

SelectItem.displayName = 'SelectItem'
