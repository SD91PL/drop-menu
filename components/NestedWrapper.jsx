export default function NestedWrapper({ children }) {
	return (
		<div className='flex'>
			<div className='mr-3 sm:mr-6 w-5 sm:w-10'>{/* SPACE DIV */}</div>
			{children}
		</div>
	)
}
