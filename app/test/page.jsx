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
							<button className='flex justify-center items-center gap-1 px-4 py-3 bg-[#7F56D9] hover:bg-[#6141a5] rounded-lg text-white text-sm font-semibold shadow-sm transition-colors outline-[#6141a5]'>
								<img
									src='/icons/plus-circle.svg'
									alt=''
								/>
								<span>Dodaj pozycję menu</span>
							</button>
						</div>
					</section>

					{/* FORM */}
					<section className='flex pt-[1.1875rem] w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
						<form className='flex flex-col w-full pl-4 sm:pl-6'>
							<div className='flex flex-col gap-2 '>
								<div className='flex flex-col text-sm gap-1'>
									<div className='flex gap-2'>
										<label className='text-[#344054] font-medium'>Nazwa</label>
										<p className='text-red-500 opacity-0'>Error</p>
									</div>
									<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
								</div>
								<div className='flex flex-col text-sm gap-1'>
									<div className='flex gap-2'>
										<label className='text-[#344054] font-medium'>Link</label>
										<p className='text-red-500 opacity-0'>Error</p>
									</div>
									<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
								</div>
							</div>

							<div className='flex justify-start items-center gap-2 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Anuluj
								</button>
								<button
									type='submit'
									className='py-[0.625rem] px-4 border border-[#D6BBFB] rounded-lg text-[#6941C6] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj
								</button>
							</div>
						</form>
						<div className='min-w-[80px]'>
							<div className='flex w-full justify-center'>
								<button className='flex justify-center items-center w-10 h-9 hover:scale-105 transition-transform outline-gray-200'>
									<img
										src='/icons/trash.svg'
										alt=''
										// Cancel or Clear
									/>
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<div className='menu-items dnd-wrapper'>
								<div className='flex justify-between items-center px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
									<div className='flex'>
										<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
											<img
												src='/icons/move.svg'
												alt='Grabber'
											/>
										</button>
										<div className='flex flex-col'>
											<p className='text-[#101828]'>Promocje</p>
											<a
												href='https://rc32141.redcart.pl/promocje'
												target='_blank'
												rel='noopener'
												className='outline-gray-200'>
												<p className='font-normal text-[#475467]'>
													https://rc32141.redcart.pl/promocje
												</p>
											</a>
										</div>
									</div>
									<div className='flex text-[#344054] border border-[#D0D5DD] rounded-lg overflow-hidden'>
										<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
											Usuń
										</button>
										<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
											Edytuj
										</button>
										<button className='py-[0.625rem] px-4 outline-gray-200'>
											Dodaj pozycję menu
										</button>
									</div>
								</div>
							</div>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>
					{/* MENU - ITEM - EDIT STATE WITH FORM*/}
					{/* MENU - ITEM - WITH NESTED ITEMS*/}
				</div>
			</main>
		</>
	)
}
