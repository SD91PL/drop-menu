export default function MenuEmpty() {
	return (
		<section className='w-full bg-[#F9FAFB] rounded-lg border border-[#EAECF0]'>
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
	)
}
