import MenuWrapper from './MenuWrapper'
import MenuItem from './MenuItem'

export default function MenuItems({
	items,
	setItems,
	onRemove,
	onEdit,
	onAddNested,
}) {
	return (
		<section className='w-full bg-[#f9fafb] rounded-lg border border-[#D0D5DD] overflow-hidden'>
			<ul className='flex flex-col'>
				<MenuWrapper
					items={items}
					setItems={setItems}>
					{items.map(item => (
						<MenuItem
							key={item.id}
							id={item.id}
							name={item.name}
							link={item.link}
							onRemove={onRemove} // Pass the remove handler
							onEdit={onEdit} // Pass the edit handler
							onAddNested={onAddNested} // Pass the nested add handler
						/>
					))}
				</MenuWrapper>
			</ul>
		</section>
	)
}
