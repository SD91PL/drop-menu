export default function NestedWrapper({ children }) {
	return (
		<div className='flex w-full'>
			<div className='mr-3 sm:mr-6 w-5 sm:w-10 shrink-0 flex-none'>{/* SPACE DIV */}</div>
			<div className='flex flex-col flex-1 w-[calc(100%-4rem)]'>{children}</div>
		</div>
	)
}
