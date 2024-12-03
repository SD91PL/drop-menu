// Test - Just a graphical representation of the mockup from Figma using Tailwind CSS classes

export default function Test() {
	return (
		<>
			<p className='bg-[#6141a5] w-full text-center text-white'>TEST</p>

			<main className='container px-2 lg:px-4 xl:px-5'>
				<div className='flex flex-col justify-center items-center gap-7'>
					{/* MENU - EMPTY */}
					<section className='mt-8 w-full bg-[#F9FAFB] rounded-lg border border-[#EAECF0]'>
						<div className='flex flex-col justify-center items-center gap-6 py-6'>
							<div className='flex flex-col justify-center items-center text-center'>
								<p className='text-base text-[#101828] font-semibold'>
									Menu jest puste
								</p>
								<p className='text-[#475467] text-sm'>
									W tym menu nie ma jeszcze żadnych linków.
								</p>
							</div>
							<button className='flex justify-center items-center gap-1 px-4 py-3 bg-[#7F56D9] hover:bg-[#6141a5] rounded-lg text-white text-sm font-semibold shadow-sm transition-colors'>
								<img
									src='/icons/plus-circle.svg'
									alt=''
								/>
								<span>Dodaj pozycję menu</span>
							</button>
						</div>
					</section>
					{/* FORM */}
					<section className='flex pt-5 w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
						<div className='flex flex-col w-full pl-4 sm:pl-6'>
							<div className='flex flex-col justify-end min-h-[160px]'>

								<p>FORM</p>

								
							</div>
							<div className='flex justify-start items-center gap-2 min-h-[80px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow transition-shadow'>
									Anuluj
								</button>
								<button className='py-[0.625rem] px-4 border border-[#D6BBFB] rounded-lg text-[#6941C6] shadow-sm hover:shadow transition-shadow'>
									Dodaj
								</button>
							</div>
						</div>
						<div className='min-w-[80px]'>
							<div className='flex w-full justify-center'>
								<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform'>
									<img
										src='/icons/trash.svg'
										alt=''
									/>
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM */}
					<section className='w-full bg-[#F9FAFB] rounded-lg border border-[#EAECF0]'>
						<div className='flex flex-col justify-center items-center gap-8 py-6'>
							<p>MENU ITEM</p>
						</div>
					</section>
					{/* MENU - ITEM - EDIT STATE WITH FORM*/}
					{/* MENU - ITEM - WITH NESTED ITEMS*/}
				</div>
			</main>
		</>
	)
}
