import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
	name: z.string().nonempty('Nazwa jest wymagana'),
	link: z.string().url('Podaj poprawny URL - http:// lub https://'),
})

export default function MenuForm({
	onSubmit,
	onCancel,
	defaultValues,
	isEditing,
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues,
	})

	const handleFormSubmit = data => {
		onSubmit(data)
		reset() // Reset form after submission
	}

	const handleClearFields = () => {
		reset({ name: '', link: '' }) // Reset fields to empty strings
	}

	return (
		<section className='flex pt-[1.1875rem] w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
			<form
				onSubmit={handleSubmit(handleFormSubmit)}
				className='flex flex-col w-full px-4 sm:px-0 sm:pl-6'>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col text-sm gap-1'>
						<label className='text-[#344054] font-medium'>Nazwa</label>
						<input
							{...register('name')}
							className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow'
						/>
						<p className='text-red-500 text-xs'>{errors.name?.message}</p>
					</div>
					<div className='flex flex-col text-sm gap-1'>
						<label className='text-[#344054] font-medium'>Link</label>
						<input
							{...register('link')}
							className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow'
						/>
						<p className='text-red-500 text-xs'>{errors.link?.message}</p>
					</div>
				</div>
				<div className='flex justify-between items-center min-h-[79px] text-sm font-semibold'>
					<div className='flex gap-2'>
						<button
							type='button'
							onClick={onCancel}
							className='py-[0.625rem] px-4 border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
							Anuluj
						</button>
						<button
							type='submit'
							className='py-[0.625rem] px-4 border border-[#D6BBFB] rounded-lg text-[#6941C6] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
							{isEditing ? 'Edytuj' : 'Dodaj'}
						</button>
					</div>
				</div>
			</form>
			{/* Clearing form fields - start */}
			<div className='hidden sm:block min-w-[60px] sm:min-w-[80px]'>
				<div className='flex w-full justify-center'>
					<button
						type='button'
						onClick={handleClearFields}
						className='flex justify-center items-center w-10 h-9 hover:scale-105 transition-transform outline-gray-200'>
						<img
							src='/icons/trash.svg'
							alt='Wyczyść pola formularza'
						/>
					</button>
				</div>
			</div>
			{/* Clearing form fields - end */}
		</section>
	)
}
