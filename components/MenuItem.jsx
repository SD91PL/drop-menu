import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import MenuForm from './MenuForm'
import NestedWrapper from './NestedWrapper'
import MenuItems from './MenuItems'

export default function MenuItem({
	id,
	name,
	link,
	nested = [],
	onRemove,
	onEdit,
	onAddNested,
}) {
	const [isEditing, setIsEditing] = useState(false)
	const [addingNestedItems, setAddingNestedItems] = useState(false)
	const [nestedItems, setNestedItems] = useState(nested)

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	const handleEditSubmit = data => {
		onEdit(id, data)
		setIsEditing(false)
	}

	const handleAddNestedItem = data => {
		const newNestedItem = { id: crypto.randomUUID(), ...data, nested: [] }
		setNestedItems(prev => [...prev, newNestedItem])
		onAddNested(id, newNestedItem) // Notify parent about nested item addition
		setAddingNestedItems(false)
	}

	return (
		<li
			ref={setNodeRef}
			style={style}
			{...attributes}
			className='flex flex-col cursor-default'>
			<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
				<div className='flex'>
					<button
						className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'
						{...listeners}>
						<img
							src='/icons/move.svg'
							alt='Grabber'
						/>
					</button>
					<div className='flex flex-col'>
						<p className='text-[#101828]'>{name}</p>
						<a
							href={link}
							target='_blank'
							rel='noopener'
							className='outline-gray-200'>
							<p className='font-normal text-[#475467]'>
								<span className='md:hidden'>Link</span>
								<span className='hidden md:inline'>{link}</span>
							</p>
						</a>
					</div>
				</div>
				{/* MenuItem Buttons */}
				<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
					<button
						onClick={() => onRemove(id)}
						className='p-[0.625rem] px-3 sm:px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
						Usuń
					</button>
					<button
						onClick={() => {
							setIsEditing(prev => !prev)
							setAddingNestedItems(false)
						}}
						className='p-[0.625rem] px-3 sm:px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
						Edytuj
					</button>
					<button
						onClick={() => {
							setAddingNestedItems(prev => !prev)
							setIsEditing(false)
						}}
						className='p-[0.625rem] px-3 sm:px-4 outline-gray-200'>
						Dodaj pozycję menu
					</button>
				</div>
			</div>

			{/* Edit form */}
			{isEditing && (
				<div className='py-2 px-1 sm:py-4 sm:px-6 w-full'>
					<MenuForm
						defaultValues={{ name, link }}
						onSubmit={handleEditSubmit}
						onCancel={() => setIsEditing(false)}
						isEditing={true}
					/>
				</div>
			)}

			<NestedWrapper>
				{/* Adding Nested Items form */}
				{addingNestedItems && (
					<div className='py-2 pr-2 sm:py-4 sm:pr-6 w-full'>
						<MenuForm
							onSubmit={handleAddNestedItem}
							onCancel={() => setAddingNestedItems(false)}
						/>
					</div>
				)}

				{/* Nested Items */}
				{nestedItems.length > 0 && (
					<MenuItems
						items={nestedItems}
						setItems={setNestedItems}
						onRemove={id =>
							setNestedItems(prev => prev.filter(item => item.id !== id))
						}
						onEdit={(id, data) => {
							setNestedItems(prev =>
								prev.map(item => (item.id === id ? { ...item, ...data } : item))
							)
						}}
						onAddNested={(parentId, data) => {
							setNestedItems(prev =>
								prev.map(item =>
									item.id === parentId
										? {
												...item,
												nested: [
													...item.nested,
													{ id: crypto.randomUUID(), ...data },
												],
										  }
										: item
								)
							)
						}}
					/>
				)}
			</NestedWrapper>
		</li>
	)
}
