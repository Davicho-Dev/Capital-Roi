import { Inter } from '@next/font/google'

import styles from './page.module.sass'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.center} ${inter.className}`}>Page Under Construction</h1>
		</main>
	)
}

export default HomePage
