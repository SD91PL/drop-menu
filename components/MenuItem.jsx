import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import MenuForm from './MenuForm'
import MenuItems from './MenuItems'
import NestedWrapper from './NestedWrapper'

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
	const [isAddingNested, setIsAddingNested] = useState(false)

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

	const handleAddNestedSubmit = data => {
		onAddNested(id, data)
		setIsAddingNested(false)
	}

	const setNestedItems = newNestedItems => {
		onEdit(id, { nested: newNestedItems })
	}

	return (
		<li
			ref={setNodeRef}
			style={style}
			{...attributes}
			className='flex flex-col'>
			<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
				<div className='flex'>
					<button
						{...listeners}
						className='flex justify-center items-center w-10 h-10 cursor-move'>
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
							rel='noopener noreferrer'
							className='text-[#475467]'>
							{link}
						</a>
					</div>
				</div>
				<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
					<button
						onClick={() => onRemove(id)}
						className='p-[0.625rem] px-3 border-r'>
						Usuń
					</button>
					<button
						onClick={() => {
							setIsEditing(prev => !prev)
							setIsAddingNested(false)
						}}
						className='p-[0.625rem] px-3 border-r'>
						Edytuj
					</button>
					<button
						onClick={() => {
							setIsAddingNested(prev => !prev)
							setIsEditing(false)
						}}
						className='p-[0.625rem] px-3'>
						Dodaj nested
					</button>
				</div>
			</div>

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
				{nested.length > 0 && (
					<MenuItems
						items={nested}
						setItems={setNestedItems}
						onRemove={onRemove}
						onEdit={onEdit}
						onAddNested={onAddNested}
					/>
				)}
				{isAddingNested && (
					<div className='py-2 pr-2 sm:py-4 sm:pr-6 w-full'>
						<MenuForm
							onSubmit={handleAddNestedSubmit}
							onCancel={() => setIsAddingNested(false)}
						/>
					</div>
				)}
			</NestedWrapper>
		</li>
	)
}
