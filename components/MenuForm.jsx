export default function MenuForm() {
	return (
		<section className='flex pt-[1.1875rem] w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
			<form className='flex flex-col w-full px-4 sm:px-0 sm:pl-6'>
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
			<div className='hidden sm:block min-w-[60px] sm:min-w-[80px]'>
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
	)
}
