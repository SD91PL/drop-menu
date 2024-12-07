import MenuWrapper from './MenuWrapper'
import MenuItem from './MenuItem'

export default function MenuItems({ items, setItems }) {
	// Function to handle removing items - NOT WORKING
	const handleRemoveItem = id => {
		setItems(prev => prev.filter(item => item.id !== id))
	}

	// Function to handle item editing - NOT WORKING
	const handleEditItem = (id, data) => {
		setItems(prev =>
			prev.map(item => (item.id === id ? { ...item, ...data } : item))
		)
	}

	// Function to add nested items - NOT WORKING
	const handleAddNestedItem = (parentId, data) => {
		setItems(prev =>
			prev.map(item =>
				item.id === parentId
					? { ...item, nested: [...item.nested, { id: Date.now(), ...data }] }
					: item
			)
		)
	}

	return (
		<section className='w-full bg-[#f9fafb] rounded-lg border border-[#D0D5DD] overflow-hidden'>
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
						/>
					))}
				</MenuWrapper>
			</div>
		</section>
	)
}
