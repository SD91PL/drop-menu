import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex flex-col justify-start items-center h-screen'>
			<section id='notFound'>
				<div className='flex justify-center opacity-10'>
					<img
						className='grayscale'
						src='/logo.webp'
						alt='Drop Menu logotype'
					/>
				</div>
				<div className='flex justify-center gap-2 opacity-50'>
					<p>404</p>
					<div className='border'></div>
					<p>This page could not be found.</p>
				</div>
				<Link href="/">
					<p className='mt-8 text-center p-4 border rounded-lg'>Return to App</p>
				</Link>
			</section>
		</main>
	)
}
