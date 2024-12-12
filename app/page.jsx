'use client'

import { useState, useEffect } from 'react'
import MenuForm from '@/components/MenuForm'
import MenuItems from '@/components/MenuItems'
import MenuEmpty from '@/components/MenuEmpty'

export default function Page() {
	const [items, setItems] = useState([])
	const [isFormVisible, setIsFormVisible] = useState(false)

	// Loading data from localStorage
	useEffect(() => {
		const storedItems = localStorage.getItem('menuItems')
		if (storedItems) {
			setItems(JSON.parse(storedItems))
		}
	}, [])

	// Save data to localStorage every time there is a change in the items state
	useEffect(() => {
		localStorage.setItem('menuItems', JSON.stringify(items))
	}, [items])

	const updateNestedItem = (tree, id, updater) => {
		return tree.map(item => {
			if (item.id === id) {
				return updater(item)
			}
			if (item.nested?.length) {
				return {
					...item,
					nested: updateNestedItem(item.nested, id, updater),
				}
			}
			return item
		})
	}

	const removeNestedItem = (tree, id) => {
		return tree
			.filter(item => item.id !== id)
			.map(item => ({
				...item,
				nested: removeNestedItem(item.nested, id),
			}))
	}

	const handleAddItem = data => {
		setItems(prev => [
			...prev,
			{ id: crypto.randomUUID(), ...data, nested: [] },
		])
		setIsFormVisible(false)
	}

	const handleEditItem = (id, data) => {
		setItems(prev => updateNestedItem(prev, id, item => ({ ...item, ...data })))
	}

	const handleRemoveItem = id => {
		setItems(prev => removeNestedItem(prev, id))
	}

	const handleAddNestedItem = (parentId, data) => {
		setItems(prev =>
			updateNestedItem(prev, parentId, item => ({
				...item,
				nested: [
					...item.nested,
					{ id: crypto.randomUUID(), ...data, nested: [] },
				],
			}))
		)
	}

	return (
		<main className='container px-2 py-8 lg:px-4 xl:px-5'>
			<div className='flex flex-col justify-center items-center gap-7'>
				{items.length === 0 ? (
					<>
						{!isFormVisible && (
							<MenuEmpty onAddMenu={() => setIsFormVisible(true)} />
						)}
						{isFormVisible && (
							<MenuForm
								onSubmit={handleAddItem}
								onCancel={() => setIsFormVisible(false)}
							/>
						)}
					</>
				) : (
					<MenuItems
						items={items}
						setItems={setItems}
						onRemove={handleRemoveItem}
						onEdit={handleEditItem}
						onAddNested={handleAddNestedItem}
					/>
				)}
			</div>
		</main>
	)
}
