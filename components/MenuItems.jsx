'use client'

import { useState } from 'react'
import MenuWrapper from './MenuWrapper'
import MenuItem from './MenuItem'
import MenuForm from './MenuForm'

export default function MenuItems({
	items,
	setItems,
	onRemove,
	onEdit,
	onAddNested,
}) {
	const [isFormVisible, setIsFormVisible] = useState(false)

	const handleAddMenuItem = data => {
		const newItem = {
			id: crypto.randomUUID(),
			...data,
			nested: [],
		}
		setItems(prev => [...prev, newItem])
		setIsFormVisible(false)
	}

	return (
		<div className='menu-items w-full'>
			<div className='flex flex-col'>
				<MenuWrapper
					items={items}
					setItems={setItems}>
					{items.map(item => (
						<MenuItem
							key={item.id}
							id={item.id}
							name={item.name}
							link={item.link}
							nested={item.nested}
							onRemove={onRemove}
							onEdit={onEdit}
							onAddNested={onAddNested}
						/>
					))}
				</MenuWrapper>

				{isFormVisible && (
					<div className='py-2 px-1 sm:py-4 sm:px-6 w-full bg-[#F9FAFB] border-t border-b-[#EAECF0]'>
						<MenuForm
							onSubmit={handleAddMenuItem}
							onCancel={() => setIsFormVisible(false)}
						/>
					</div>
				)}

				<div className='menu-item-form-btn flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] bg-[#f5f5f5] text-sm font-semibold border-t border-t-[#EAECF0] z-20'>
					<button
						onClick={() => setIsFormVisible(true)}
						className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
						Dodaj pozycję menu
					</button>
				</div>
			</div>
		</div>
	)
}
