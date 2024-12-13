export default function Loading() {
	return (
		<main className='flex flex-col justify-start items-center h-screen'>
			<section id='Loading'>
				<div className='mt-8 flex justify-center opacity-10'>
					<img
						className='grayscale h-[100px]'
						src='/logo.png'
						alt='Drop Menu logotype'
					/>
				</div>
				<div className='flex justify-center gap-2 opacity-20'>
					<div>
						<img
							className='grayscale scale-75 opacity-50'
							src='/icons/loading.svg'
							alt='Drop Menu logotype'
						/>
					</div>
					<div className='border'></div>
					<p>Loading...</p>
				</div>
			</section>
		</main>
	)
}
