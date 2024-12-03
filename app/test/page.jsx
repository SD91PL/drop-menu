// Test - Just a graphical representation of the mockup from Figma using Tailwind CSS classes

export default function Test() {
	return (
		<>
			<p className='bg-[#6141a5] w-full text-center text-white'>TEST</p>
			
			<main className='container px-2 lg:px-4 xl:px-5'>
				<div className='flex flex-col justify-center items-center'>
					{/* MENU - EMPTY */}
					<section className='mt-8 w-full bg-[#F9FAFB] rounded-md border border-[#EAECF0]'>
						<div className='flex flex-col justify-center items-center gap-8 py-6'>
							<div className='flex flex-col justify-center items-center text-center'>
								<p className='text-base text-[#101828] font-semibold'>
									Menu jest puste
								</p>
								<p className='text-[#475467] text-sm'>
									W tym menu nie ma jeszcze żadnych linków.
								</p>
							</div>
							<button className='flex justify-center items-center gap-2 px-4 py-3 bg-[#7F56D9] hover:bg-[#6141a5] rounded-md text-white text-sm font-semibold transition-colors'>
								<img
									src='/icons/plus-circle.svg'
									alt=''
								/>
								<span>Dodaj pozycję menu</span>
							</button>
						</div>
					</section>
					{/* FORM */}
					
				</div>
			</main>
		</>
	)
}
