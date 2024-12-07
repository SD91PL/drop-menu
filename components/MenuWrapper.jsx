export default function MenuWrapper() {
	return (
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
										Dodaj <span className='hidden md:inline'>pozycję menu</span>
									</span>
								</button>
							</div>
						</div>
						{/* FIRST ITEM - NESTED ITEMS */}
						<div className='flex bg-green-200'>
							<div className='mr-3 sm:mr-6 w-5 sm:w-10'>{/* SPACE DIV */}</div>
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
													<span className='hidden md:inline'>pozycję menu</span>
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
													<span className='hidden md:inline'>pozycję menu</span>
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
										Dodaj <span className='hidden md:inline'>pozycję menu</span>
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
	)
}
