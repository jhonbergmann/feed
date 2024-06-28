import logo from '@/assets/logo/logo.png'
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  )
}
