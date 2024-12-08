'use client'

import { useState } from 'react'
import MenuForm from '@/components/MenuForm'
import MenuItems from '@/components/MenuItems'
import MenuEmpty from '@/components/MenuEmpty'

export default function Page() {
	const [items, setItems] = useState([
		{ id: '1', name: 'Onet', link: 'https://www.onet.pl/', nested: [] },
		{ id: '2', name: 'WP', link: 'https://www.wp.pl/', nested: [] },
		{ id: '3', name: 'Droplo', link: 'https://droplo.com/', nested: [] },
	]) // Example of a data array for development needs. IT WILL BE REPLACED by an empty initial array [] in the future.

	const [isFormVisible, setIsFormVisible] = useState(false) // Manage visibility of MenuForm

	// Function to handle the addition of new items
	const handleAddItem = data => {
		setItems(prev => [
			...prev,
			{ id: crypto.randomUUID(), ...data, nested: [] },
		])
		setIsFormVisible(false) // Hide the form after adding an item
	}

	// Function to handle removing items
	const handleRemoveItem = id => {
		setItems(prev => prev.filter(item => item.id !== id))
	}

	// Function to handle editing items
	const handleEditItem = (id, data) => {
		setItems(prev =>
			prev.map(item => (item.id === id ? { ...item, ...data } : item))
		)
	}

	// Function to handle adding nested items
	const handleAddNestedItem = (parentId, data) => {
		setItems(prev =>
			prev.map(item =>
				item.id === parentId
					? {
							...item,
							nested: [...item.nested, { id: crypto.randomUUID(), ...data }],
					  }
					: item
			)
		)
	}

	return (
		<main className='container px-2 py-8 lg:px-4 xl:px-5'>
			<div className='flex flex-col justify-center items-center gap-7'>
				{/* Show MenuEmpty and MenuForm when items array is empty */}
				{items.length === 0 ? (
					<>
						{/* Show MenuEmpty only when the form is not visible */}
						{!isFormVisible && (
							<MenuEmpty
								onAddMenu={() => setIsFormVisible(true)} // Show the form on button click
							/>
						)}

						{/* Show MenuForm when isFormVisible is true */}
						{isFormVisible && (
							<MenuForm
								onSubmit={handleAddItem} // Add item and hide form
								onCancel={() => setIsFormVisible(false)} // Hide the form on cancel
							/>
						)}
					</>
				) : (
					<MenuItems
						items={items}
						setItems={setItems}
						onRemove={handleRemoveItem} // Pass the remove handler
						onEdit={handleEditItem} // Pass the edit handler
						onAddNested={handleAddNestedItem} // Pass the nested add handler
						onAddMenu={() => setIsFormVisible(true)} // Show the form
					/>
				)}
			</div>
		</main>
	)
}
