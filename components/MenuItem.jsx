import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import MenuForm from './MenuForm'
import NestedWrapper from './NestedWrapper'
import MenuItems from './MenuItems' // Import MenuItems to render nested items

export default function MenuItem({
	id,
	name,
	link,
	nested = [],
	onRemove,
	onEdit,
	onAddNested,
}) {
	const [isEditing, setIsEditing] = useState(false) // Control edit state
	const [addingNestedItems, setAddingNestedItems] = useState(false) // Control nested items form visibility
	const [nestedItems, setNestedItems] = useState(nested) // Store nested items

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	const handleEditSubmit = data => {
		onEdit(id, data) // Trigger the edit handler
		setIsEditing(false) // Exit edit mode
	}

	// Function to handle adding nested items
	const handleAddNestedItem = data => {
		setNestedItems(prev => [
			...prev,
			{ id: crypto.randomUUID(), ...data, nested: [] },
		])
		setAddingNestedItems(false) // Hide the nested items form
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
						{...listeners} // Listening for dragging - dnd-kit
					>
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
				{/* MenuItem Buttons - start */}
				<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
					<button
						onClick={() => onRemove(id)} // Call remove handler
						className='p-[0.625rem] px-3 sm:px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
						<img
							src='/icons/remove.svg'
							alt='Usuń'
							className='sm:hidden size-5'
						/>
						<span className='hidden sm:inline'>Usuń</span>
					</button>
					<button
						onClick={() => setIsEditing(prev => !prev)} // Toggle edit mode
						className='p-[0.625rem] px-3 sm:px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
						<img
							src='/icons/edit.svg'
							alt='Edytuj'
							className='sm:hidden size-5'
						/>
						<span className='hidden sm:inline'>Edytuj</span>
					</button>
					<button
						onClick={() => setAddingNestedItems(prev => !prev)} // Toggle nested items form visibility
						className='p-[0.625rem] px-3 sm:px-4 outline-gray-200'>
						<img
							src='/icons/add.svg'
							alt='Dodaj'
							className='sm:hidden size-5'
						/>
						<span className='hidden sm:inline'>
							Dodaj <span className='hidden md:inline'>pozycję menu</span>
						</span>
					</button>
				</div>
				{/* MenuItem Buttons - end */}
			</div>

			{/* Edit form */}
			{isEditing && (
				<div className='py-2 px-1 sm:py-4 sm:px-6 w-full'>
					<MenuForm
						defaultValues={{ name, link }} // Pass initial values for the form
						onSubmit={handleEditSubmit} // Handle the form submission
						onCancel={() => setIsEditing(false)} // Cancel editing
						isEditing={true} // Indicate that the form is in edit mode
					/>
				</div>
			)}

			<NestedWrapper>
				{/* Adding Nested Items form - start */}
				{addingNestedItems && (
					<div className='py-2 pr-2 sm:py-4 sm:pr-6 w-full'>
						<MenuForm
							onSubmit={handleAddNestedItem} // Handle nested item addition
							onCancel={() => setAddingNestedItems(false)} // Hide the form
						/>
					</div>
				)}
				{/* Adding Nested Items form - end */}

				{/* Nested Items - start */}
				{nestedItems.length > 0 && (
					<MenuItems
						items={nestedItems}
						setItems={setNestedItems}
						onRemove={id => {
							setNestedItems(prev => prev.filter(item => item.id !== id))
						}}
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
				{/* Nested Items - end */}
			</NestedWrapper>
		</li>
	)
}
