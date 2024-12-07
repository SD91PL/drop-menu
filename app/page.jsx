import MenuEmpty from '@/components/MenuEmpty'
import MenuForm from '@/components/MenuForm'
import MenuWrapper from '@/components/MenuWrapper'

export default function Home() {
	return (
		<main className='container px-2 py-8 lg:px-4 xl:px-5'>
			<div className='flex flex-col justify-center items-center gap-7'>
				<MenuEmpty />
				<MenuForm />
				<MenuWrapper />
			</div>
		</main>
	)
}
