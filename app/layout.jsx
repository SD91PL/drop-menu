import './globals.css'

export const metadata = {
	title: 'Droplo - Menu',
	description: 'Project created by SD91PL for droplo.com recruitment process.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body>{children}</body>
		</html>
	)
}
