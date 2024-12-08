import { DndContext, closestCenter } from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

export default function MenuWrapper({ children, items, setItems }) {
	const handleDragEnd = event => {
		const { active, over } = event

		if (active.id !== over.id) {
			setItems(prev => {
				const oldIndex = prev.findIndex(item => item.id === active.id)
				const newIndex = prev.findIndex(item => item.id === over.id)
				return arrayMove(prev, oldIndex, newIndex)
			})
		}
	}

	return (
		<ul className='overflow-hidden'>
			<DndContext
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
				modifiers={[restrictToVerticalAxis]} // Restrict movement to the vertical axis
			>
				<SortableContext
					items={items.map(item => item.id)}
					strategy={verticalListSortingStrategy}>
					{children}
				</SortableContext>
			</DndContext>
		</ul>
	)
}
