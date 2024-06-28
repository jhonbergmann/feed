import {TAvatarProps} from './data'
import styles from './styles.module.css'

export function Avatar({hasBorder = true, ...props}: TAvatarProps) {
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />
}
