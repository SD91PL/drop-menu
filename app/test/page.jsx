// test/page.jsx - Just a graphical representation of the mockup from Figma using Tailwind CSS classes

export default function Test() {
	return (
		<>
			<p className='bg-[#6141a5] w-full text-center text-white'>TEST</p>

			<main className='container px-2 py-8 lg:px-4 xl:px-5'>
				<div className='flex flex-col justify-center items-center gap-7'>
					{/* MENU - EMPTY */}
					<section className='w-full bg-[#F9FAFB] rounded-lg border border-[#EAECF0]'>
						<div className='flex flex-col justify-center items-center gap-6 py-6'>
							<div className='flex flex-col justify-center items-center text-center'>
								<p className='text-base text-[#101828] font-semibold'>
									Menu jest puste
								</p>
								<p className='text-[#475467] text-sm'>
									W tym menu nie ma jeszcze żadnych linków.
								</p>
							</div>
							<button className='flex justify-center items-center gap-1 px-4 py-3 bg-[#7F56D9] hover:bg-[#6141a5] rounded-lg text-white text-sm font-semibold shadow-sm transition-colors outline-[#6141a5]'>
								<img
									src='/icons/plus-circle.svg'
									alt=''
								/>
								<span>Dodaj pozycję menu</span>
							</button>
						</div>
					</section>

					{/* MENU - FORM */}
					<section className='flex pt-[1.1875rem] w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
						<form className='flex flex-col w-full px-4 sm:px-0 sm:pl-6'>
							<div className='flex flex-col gap-2 '>
								<div className='flex flex-col text-sm gap-1'>
									<div className='flex gap-2'>
										<label className='text-[#344054] font-medium'>Nazwa</label>
										<p className='text-red-500 opacity-0'>Error</p>
									</div>
									<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
								</div>
								<div className='flex flex-col text-sm gap-1'>
									<div className='flex gap-2'>
										<label className='text-[#344054] font-medium'>Link</label>
										<p className='text-red-500 opacity-0'>Error</p>
									</div>
									<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
								</div>
							</div>

							<div className='flex justify-start items-center gap-2 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Anuluj
								</button>
								<button
									type='submit'
									className='py-[0.625rem] px-4 border border-[#D6BBFB] rounded-lg text-[#6941C6] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj
								</button>
							</div>
						</form>
						<div className='hidden sm:block min-w-[60px] sm:min-w-[80px]'>
							<div className='flex w-full justify-center'>
								<button className='flex justify-center items-center w-10 h-9 hover:scale-105 transition-transform outline-gray-200'>
									<img
										src='/icons/trash.svg'
										alt=''
										// Cancel or Clear
									/>
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
									{/* EDIT STATE - DISABLED */}
								</li>
							</ul>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - EDIT STATE WITH FORM */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							{/* EDIT STATE */}
							<ul className='menu-items dnd-wrapper'>
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
									{/* EDIT STATE - FORM - start */}
									<div className='py-2 px-1 sm:py-4 sm:px-6 w-full bg-[#F9FAFB] border-b border-b-[#EAECF0]'>
										{/* COPIED FORM COMPONENT */}
										<section className='flex pt-[1.1875rem] w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
											<form className='flex flex-col w-full px-4 sm:px-0 sm:pl-6'>
												<div className='flex flex-col gap-2 '>
													<div className='flex flex-col text-sm gap-1'>
														<div className='flex gap-2'>
															<label className='text-[#344054] font-medium'>
																Nazwa
															</label>
															<p className='text-red-500 opacity-0'>Error</p>
														</div>
														<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
													</div>
													<div className='flex flex-col text-sm gap-1'>
														<div className='flex gap-2'>
															<label className='text-[#344054] font-medium'>
																Link
															</label>
															<p className='text-red-500 opacity-0'>Error</p>
														</div>
														<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
													</div>
												</div>

												<div className='flex justify-start items-center gap-2 min-h-[79px] text-sm font-semibold'>
													<button className='py-[0.625rem] px-4 border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
														Anuluj
													</button>
													<button
														type='submit'
														className='py-[0.625rem] px-4 border border-[#D6BBFB] rounded-lg text-[#6941C6] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
														Edytuj
													</button>
												</div>
											</form>
											<div className='hidden sm:block min-w-[60px] sm:min-w-[80px]'>
												<div className='flex w-full justify-center'>
													<button className='flex justify-center items-center w-10 h-9 hover:scale-105 transition-transform outline-gray-200'>
														<img
															src='/icons/trash.svg'
															alt=''
															// Cancel or Clear
														/>
													</button>
												</div>
											</div>
										</section>
									</div>
									{/* EDIT STATE - FORM - end */}
								</li>
							</ul>
							{/* */}
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - ADDING STATE */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
							</ul>
							{/* ADDING STATE - FORM */}
							<div className='py-2 px-1 sm:py-4 sm:px-6 w-full bg-[#F9FAFB] border-b border-b-[#EAECF0]'>
								{/* COPIED FORM COMPONENT */}
								<section className='flex pt-[1.1875rem] w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
									<form className='flex flex-col w-full px-4 sm:px-0 sm:pl-6'>
										<div className='flex flex-col gap-2 '>
											<div className='flex flex-col text-sm gap-1'>
												<div className='flex gap-2'>
													<label className='text-[#344054] font-medium'>
														Nazwa
													</label>
													<p className='text-red-500 opacity-0'>Error</p>
												</div>
												<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
											</div>
											<div className='flex flex-col text-sm gap-1'>
												<div className='flex gap-2'>
													<label className='text-[#344054] font-medium'>
														Link
													</label>
													<p className='text-red-500 opacity-0'>Error</p>
												</div>
												<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
											</div>
										</div>

										<div className='flex justify-start items-center gap-2 min-h-[79px] text-sm font-semibold'>
											<button className='py-[0.625rem] px-4 border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
												Anuluj
											</button>
											<button
												type='submit'
												className='py-[0.625rem] px-4 border border-[#D6BBFB] rounded-lg text-[#6941C6] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
												Dodaj
											</button>
										</div>
									</form>
									<div className='hidden sm:block min-w-[60px] sm:min-w-[80px]'>
										<div className='flex w-full justify-center'>
											<button className='flex justify-center items-center w-10 h-9 hover:scale-105 transition-transform outline-gray-200'>
												<img
													src='/icons/trash.svg'
													alt=''
													// Cancel or Clear
												/>
											</button>
										</div>
									</div>
								</section>
							</div>
							{/*  */}
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - WITH NESTED ITEMS */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
								{/* SECOND ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Diamenty forbesa</p>
												<a
													href='https://www.forbes.pl/diamenty'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://www.forbes.pl/diamenty
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
								{/*  */}
							</ul>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - WITH NESTED ITEMS - ADDING NESTED IN NESTED */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								{/* FIRST ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
									{/* FIRST ITEM - ADDING STATE */}
									<div className='flex bg-[#F9FAFB] border-b border-b-[#EAECF0]'>
										<div className='w-5 sm:w-10'>{/* SPACE DIV */}</div>
										<div className='py-2 px-1 sm:py-4 sm:px-6 w-full'>
											{/* COPIED FORM COMPONENT */}
											<section className='flex pt-[1.1875rem] w-full bg-[#FFFFFF] rounded-lg border border-[#D0D5DD]'>
												<form className='flex flex-col w-full px-4 sm:px-0 sm:pl-6'>
													<div className='flex flex-col gap-2 '>
														<div className='flex flex-col text-sm gap-1'>
															<div className='flex gap-2'>
																<label className='text-[#344054] font-medium'>
																	Nazwa
																</label>
																<p className='text-red-500 opacity-0'>Error</p>
															</div>
															<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
														</div>
														<div className='flex flex-col text-sm gap-1'>
															<div className='flex gap-2'>
																<label className='text-[#344054] font-medium'>
																	Link
																</label>
																<p className='text-red-500 opacity-0'>Error</p>
															</div>
															<input className='py-2 px-3 border border-[#D0D5DD] rounded-lg text-[#667085] text-base outline-none shadow-sm focus:shadow transition-shadow' />
														</div>
													</div>

													<div className='flex justify-start items-center gap-2 min-h-[79px] text-sm font-semibold'>
														<button className='py-[0.625rem] px-4 border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
															Anuluj
														</button>
														<button
															type='submit'
															className='py-[0.625rem] px-4 border border-[#D6BBFB] rounded-lg text-[#6941C6] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
															Dodaj
														</button>
													</div>
												</form>
												<div className='hidden sm:block min-w-[60px] sm:min-w-[80px]'>
													<div className='flex w-full justify-center'>
														<button className='flex justify-center items-center w-10 h-9 hover:scale-105 transition-transform outline-gray-200'>
															<img
																src='/icons/trash.svg'
																alt=''
																// Cancel or Clear
															/>
														</button>
													</div>
												</div>
											</section>
										</div>
									</div>

									{/*  */}
								</li>
								{/* SECOND ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Diamenty forbesa</p>
												<a
													href='https://www.forbes.pl/diamenty'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://www.forbes.pl/diamenty
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
								{/*  */}
							</ul>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - WITH NESTED ITEMS - NESTED IN NESTED */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								{/* FIRST ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
									{/* FIRST ITEM - NESTED ITEMS */}
									<div className='flex bg-[#F9FAFB] border-b border-b-[#EAECF0]'>
										<div className='w-5 sm:w-10'>{/* SPACE DIV */}</div>
										{/* NESTED ITEMS */}
										<ul className='menu-items dnd-wrapper w-full border border-t-0 border-r-0 border-[#EAECF0] rounded-bl-lg overflow-hidden'>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Diamenty forbesa</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Diamenty forbesa</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
										</ul>
									</div>
									{/*  */}
								</li>
								{/* SECOND ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Diamenty forbesa</p>
												<a
													href='https://www.forbes.pl/diamenty'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://www.forbes.pl/diamenty
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
								{/*  */}
							</ul>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - WITH NESTED ITEMS - NESTED IN NESTED IN NESTED*/}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								{/* FIRST ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
									{/* FIRST ITEM - NESTED ITEMS */}
									<div className='flex bg-[#F9FAFB]'>
										<div className='w-5 sm:w-10'>{/* SPACE DIV */}</div>
										{/* NESTED ITEMS */}
										<ul className='menu-items dnd-wrapper w-full border border-t-0 border-r-0 border-[#EAECF0] rounded-bl-lg overflow-hidden'>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Diamenty forbesa</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Ostatnie 7 dni</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
										</ul>
									</div>
									{/*  */}
									{/* NESTED ITEM IN NESTED ITEM */}
									<div className='flex bg-[#F9FAFB] -'>
										<div className='w-5 sm:w-10'>{/* SPACE DIV */}</div>
										<div className='w-5 sm:w-10'>{/* SPACE DIV */}</div>
										{/* NESTED ITEMS */}
										<ul className='menu-items dnd-wrapper w-full border border-t-0 border-r-0 border-[#EAECF0] rounded-bl-lg overflow-hidden'>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Diamenty forbesa</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Ostatnie 7 dni</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
										</ul>
									</div>
									{/*  */}
								</li>
								{/* SECOND ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Diamenty forbesa</p>
												<a
													href='https://www.forbes.pl/diamenty'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://www.forbes.pl/diamenty
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
								{/*  */}
							</ul>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - WITH NESTED ITEMS - NESTED IN NESTED IN NESTED - CHANGED STRUCTURE - FIXED */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								{/* FIRST ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Promocje</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
									{/* FIRST ITEM - NESTED ITEMS */}
									<div className='flex bg-green-200'>
										<div className='mr-3 sm:mr-6 w-5 sm:w-10'>
											{/* SPACE DIV */}
										</div>
										{/* NESTED ITEMS */}
										<ul className='menu-items dnd-wrapper w-full overflow-hidden'>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Diamenty forbesa</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Ostatnie 7 dni</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
												{/* NESTED ITEM IN NESTED ITEM */}
												<div className='flex bg-red-200'>
													<div className='mr-3 sm:mr-6 w-5 sm:w-10'>
														{/* SPACE DIV */}
													</div>
													{/* NESTED ITEMS */}
													<ul className='menu-items dnd-wrapper w-full overflow-hidden'>
														<li className='flex flex-col'>
															<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
																<div className='flex'>
																	<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
																		<img
																			src='/icons/move.svg'
																			alt='Grabber'
																		/>
																	</button>
																	<div className='flex flex-col'>
																		<p className='text-[#101828]'>
																			Diamenty forbesa
																		</p>
																		<a
																			href='https://www.forbes.pl/diamenty'
																			target='_blank'
																			rel='noopener'
																			className='outline-gray-200'>
																			<p className='font-normal text-[#475467]'>
																				<span className='md:hidden'>Link</span>
																				<span className='hidden md:inline'>
																					https://www.forbes.pl/diamenty
																				</span>
																			</p>
																		</a>
																	</div>
																</div>
																<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/remove.svg'
																			alt='Usuń'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Usuń
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/edit.svg'
																			alt='Edytuj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Edytuj
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 outline-gray-200'>
																		<img
																			src='/icons/add.svg'
																			alt='Dodaj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Dodaj{' '}
																			<span className='hidden md:inline'>
																				pozycję menu
																			</span>
																		</span>
																	</button>
																</div>
															</div>
														</li>
														<li className='flex flex-col'>
															<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
																<div className='flex'>
																	<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
																		<img
																			src='/icons/move.svg'
																			alt='Grabber'
																		/>
																	</button>
																	<div className='flex flex-col'>
																		<p className='text-[#101828]'>
																			Ostatnie 7 dni
																		</p>
																		<a
																			href='https://www.forbes.pl/diamenty'
																			target='_blank'
																			rel='noopener'
																			className='outline-gray-200'>
																			<p className='font-normal text-[#475467]'>
																				<span className='md:hidden'>Link</span>
																				<span className='hidden md:inline'>
																					https://www.forbes.pl/diamenty
																				</span>
																			</p>
																		</a>
																	</div>
																</div>
																<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/remove.svg'
																			alt='Usuń'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Usuń
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/edit.svg'
																			alt='Edytuj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Edytuj
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 outline-gray-200'>
																		<img
																			src='/icons/add.svg'
																			alt='Dodaj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Dodaj{' '}
																			<span className='hidden md:inline'>
																				pozycję menu
																			</span>
																		</span>
																	</button>
																</div>
															</div>
														</li>
													</ul>
												</div>
												{/*  */}
											</li>
										</ul>
									</div>
									{/*  */}
								</li>
								{/* SECOND ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Diamenty forbesa</p>
												<a
													href='https://www.forbes.pl/diamenty'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://www.forbes.pl/diamenty
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
								{/*  */}
							</ul>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>

					{/* MENU - ITEM - WITH NESTED ITEMS - NESTED IN NESTED IN NESTED - CHANGED STRUCTURE - FIXED - DND KIT */}
					<section className='w-full rounded-lg border border-[#D0D5DD] overflow-hidden'>
						<div className='flex flex-col'>
							<ul className='menu-items dnd-wrapper'>
								{/* FIRST ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>DND-KIT TEST</p>
												<a
													href='https://rc32141.redcart.pl/promocje'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://rc32141.redcart.pl/promocje
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
									{/* FIRST ITEM - NESTED ITEMS */}
									<div className='flex bg-green-200'>
										<div className='mr-3 sm:mr-6 w-5 sm:w-10'>
											{/* SPACE DIV */}
										</div>
										{/* NESTED ITEMS */}
										<ul className='menu-items dnd-wrapper w-full overflow-hidden'>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Diamenty forbesa</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
											</li>
											<li className='flex flex-col'>
												<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
													<div className='flex'>
														<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
															<img
																src='/icons/move.svg'
																alt='Grabber'
															/>
														</button>
														<div className='flex flex-col'>
															<p className='text-[#101828]'>Ostatnie 7 dni</p>
															<a
																href='https://www.forbes.pl/diamenty'
																target='_blank'
																rel='noopener'
																className='outline-gray-200'>
																<p className='font-normal text-[#475467]'>
																	<span className='md:hidden'>Link</span>
																	<span className='hidden md:inline'>
																		https://www.forbes.pl/diamenty
																	</span>
																</p>
															</a>
														</div>
													</div>
													<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/remove.svg'
																alt='Usuń'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Usuń</span>
														</button>
														<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
															<img
																src='/icons/edit.svg'
																alt='Edytuj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>Edytuj</span>
														</button>
														<button className='py-[0.625rem] px-4 outline-gray-200'>
															<img
																src='/icons/add.svg'
																alt='Dodaj'
																className='sm:hidden size-5'
															/>
															<span className='hidden sm:inline'>
																Dodaj{' '}
																<span className='hidden md:inline'>
																	pozycję menu
																</span>
															</span>
														</button>
													</div>
												</div>
												{/* NESTED ITEM IN NESTED ITEM */}
												<div className='flex bg-red-200'>
													<div className='mr-3 sm:mr-6 w-5 sm:w-10'>
														{/* SPACE DIV */}
													</div>
													{/* NESTED ITEMS */}
													<ul className='menu-items dnd-wrapper w-full overflow-hidden'>
														<li className='flex flex-col'>
															<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
																<div className='flex'>
																	<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
																		<img
																			src='/icons/move.svg'
																			alt='Grabber'
																		/>
																	</button>
																	<div className='flex flex-col'>
																		<p className='text-[#101828]'>
																			Diamenty forbesa
																		</p>
																		<a
																			href='https://www.forbes.pl/diamenty'
																			target='_blank'
																			rel='noopener'
																			className='outline-gray-200'>
																			<p className='font-normal text-[#475467]'>
																				<span className='md:hidden'>Link</span>
																				<span className='hidden md:inline'>
																					https://www.forbes.pl/diamenty
																				</span>
																			</p>
																		</a>
																	</div>
																</div>
																<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/remove.svg'
																			alt='Usuń'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Usuń
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/edit.svg'
																			alt='Edytuj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Edytuj
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 outline-gray-200'>
																		<img
																			src='/icons/add.svg'
																			alt='Dodaj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Dodaj{' '}
																			<span className='hidden md:inline'>
																				pozycję menu
																			</span>
																		</span>
																	</button>
																</div>
															</div>
														</li>
														<li className='flex flex-col'>
															<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-t-0 border-[#EAECF0]'>
																<div className='flex'>
																	<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
																		<img
																			src='/icons/move.svg'
																			alt='Grabber'
																		/>
																	</button>
																	<div className='flex flex-col'>
																		<p className='text-[#101828]'>
																			Ostatnie 7 dni
																		</p>
																		<a
																			href='https://www.forbes.pl/diamenty'
																			target='_blank'
																			rel='noopener'
																			className='outline-gray-200'>
																			<p className='font-normal text-[#475467]'>
																				<span className='md:hidden'>Link</span>
																				<span className='hidden md:inline'>
																					https://www.forbes.pl/diamenty
																				</span>
																			</p>
																		</a>
																	</div>
																</div>
																<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/remove.svg'
																			alt='Usuń'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Usuń
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
																		<img
																			src='/icons/edit.svg'
																			alt='Edytuj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Edytuj
																		</span>
																	</button>
																	<button className='py-[0.625rem] px-4 outline-gray-200'>
																		<img
																			src='/icons/add.svg'
																			alt='Dodaj'
																			className='sm:hidden size-5'
																		/>
																		<span className='hidden sm:inline'>
																			Dodaj{' '}
																			<span className='hidden md:inline'>
																				pozycję menu
																			</span>
																		</span>
																	</button>
																</div>
															</div>
														</li>
													</ul>
												</div>
												{/*  */}
											</li>
										</ul>
									</div>
									{/*  */}
								</li>
								{/* SECOND ITEM */}
								<li className='flex flex-col'>
									<div className='flex justify-between items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold bg-white border border-[#EAECF0]'>
										<div className='flex'>
											<button className='flex justify-center items-center w-10 h-10 hover:scale-105 transition-transform outline-gray-200 cursor-move'>
												<img
													src='/icons/move.svg'
													alt='Grabber'
												/>
											</button>
											<div className='flex flex-col'>
												<p className='text-[#101828]'>Diamenty forbesa</p>
												<a
													href='https://www.forbes.pl/diamenty'
													target='_blank'
													rel='noopener'
													className='outline-gray-200'>
													<p className='font-normal text-[#475467]'>
														<span className='md:hidden'>Link</span>
														<span className='hidden md:inline'>
															https://www.forbes.pl/diamenty
														</span>
													</p>
												</a>
											</div>
										</div>
										<div className='flex ml-2 text-[#344054] border border-[#D0D5DD] rounded-lg overflow-clip'>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/remove.svg'
													alt='Usuń'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Usuń</span>
											</button>
											<button className='py-[0.625rem] px-4 border-r border-r-[#D0D5DD] outline-gray-200'>
												<img
													src='/icons/edit.svg'
													alt='Edytuj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>Edytuj</span>
											</button>
											<button className='py-[0.625rem] px-4 outline-gray-200'>
												<img
													src='/icons/add.svg'
													alt='Dodaj'
													className='sm:hidden size-5'
												/>
												<span className='hidden sm:inline'>
													Dodaj{' '}
													<span className='hidden md:inline'>pozycję menu</span>
												</span>
											</button>
										</div>
									</div>
								</li>
								{/*  */}
							</ul>
							<div className='flex justify-start items-center px-4 sm:px-6 py-4 min-h-[79px] text-sm font-semibold'>
								<button className='py-[0.625rem] px-4 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] shadow-sm hover:shadow focus:shadow outline-none transition-shadow'>
									Dodaj pozycję menu
								</button>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	)
}
