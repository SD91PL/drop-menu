'use client'

import { useState } from 'react'
import MenuForm from '@/components/MenuForm'
import MenuItems from '@/components/MenuItems'

export default function Page() {
	const [items, setItems] = useState([
		{ id: '1', name: 'Onet', link: 'https://www.onet.pl/' },
		{ id: '2', name: 'WP', link: 'https://www.wp.pl/' },
		{ id: '3', name: 'Droplo', link: 'https://droplo.com/' },
	])

	// Function to handle the addition of new items
	const handleAddItem = data => {
		setItems(prev => [...prev, { id: Date.now(), ...data, nested: [] }])
	}

	return (
		<main className='container px-2 py-8 lg:px-4 xl:px-5'>
			<div className='flex flex-col justify-center items-center gap-7'>
				{/* Form for adding menu items */}
				<MenuForm
					onSubmit={handleAddItem}
					onCancel={() => console.log('Formularz anulowany')}
				/>

				{/* List of menu items */}
				<MenuItems
					items={items}
					setItems={setItems} // transfer state to edit and manage between components
				/>
			</div>
		</main>
	)
}
