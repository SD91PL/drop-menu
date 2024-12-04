export default function NotFound() {
	return (
		<main className='flex flex-col justify-center items-center h-screen'>
			<section id='notFound'>
				<img
					className='grayscale'
					src='/logo.png'
					alt='Drop Menu logotype'
				/>
				<div className='flex gap-2'>
					<p>404</p>
					<div className='border'></div>
					<p>This page could not be found.</p>
				</div>
			</section>
		</main>
	)
}
