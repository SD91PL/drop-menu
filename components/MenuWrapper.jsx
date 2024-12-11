import { DndContext, closestCenter } from '@dnd-kit/core'
import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'

export default function MenuWrapper({ children, items, setItems }) {
	const handleDragEnd = event => {
		const { active, over } = event

		if (!over) return // If there is no destination, do nothing.

		const activeIndex = findIndexById(items, active.id)
		const overIndex = findIndexById(items, over.id)

		if (activeIndex && overIndex) {
			const updatedItems = moveItemInTree(
				items,
				activeIndex.path,
				overIndex.path
			)
			setItems(updatedItems)
		}
	}

	return (
		<ul className='overflow-hidden'>
			<DndContext
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}>
				<SortableContext
					items={flattenItems(items).map(item => item.id)}
					strategy={verticalListSortingStrategy}>
					{children}
				</SortableContext>
			</DndContext>
		</ul>
	)
}

// Function that searches for an item based on ID.
function findIndexById(tree, id, path = []) {
	for (let i = 0; i < tree.length; i++) {
		const item = tree[i]
		if (item.id === id) {
			return { path: [...path, i], item }
		}
		if (item.nested?.length) {
			const result = findIndexById(item.nested, id, [...path, i])
			if (result) return result
		}
	}
	return null
}

// Function to move an element in the tree.
function moveItemInTree(tree, fromPath, toPath) {
	const newTree = [...tree]
	const itemToMove = extractItemAtPath(newTree, fromPath)

	if (itemToMove) {
		insertItemAtPath(newTree, itemToMove, toPath)
	}

	return newTree
}

function extractItemAtPath(tree, path) {
	const index = path[path.length - 1]
	const parent = path.slice(0, -1).reduce((acc, idx) => acc[idx].nested, tree)

	const [removed] = parent.splice(index, 1)
	return removed
}

function insertItemAtPath(tree, item, path) {
	const index = path[path.length - 1]
	const parent = path.slice(0, -1).reduce((acc, idx) => acc[idx].nested, tree)

	parent.splice(index, 0, item)
}

// Function that flattens the tree.
function flattenItems(tree, path = []) {
	return tree.flatMap((item, index) => {
		const newPath = [...path, index]
		return [
			{ ...item, path: newPath },
			...flattenItems(item.nested || [], newPath),
		]
	})
}
