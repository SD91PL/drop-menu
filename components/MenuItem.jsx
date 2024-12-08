import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import MenuForm from './MenuForm'

export default function MenuItem({
	id,
	name,
	link,
	onRemove,
	onEdit,
	onAddNested,
}) {
	const [isEditing, setIsEditing] = useState(false) // Control edit state

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
						onClick={() => onAddNested(id)}
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
				<div className='py-2 px-1 sm:py-4 sm:px-6 w-full bg-[#F9FAFB] border-b border-b-[#EAECF0]'>
					<MenuForm
						defaultValues={{ name, link }} // Pass initial values for the form
						onSubmit={handleEditSubmit} // Handle the form submission
						onCancel={() => setIsEditing(false)} // Cancel editing
						isEditing={true} // Indicate that the form is in edit mode
					/>
				</div>
			)}
		</li>
	)
}
