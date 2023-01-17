import { ReactNode } from 'react'

import './globals.sass'

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang='en'>
			{/*
		 <head /> will contain the components returned by the nearest parent
		 head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
		 */}
			<head />
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
