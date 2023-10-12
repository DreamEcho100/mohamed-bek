'use client';

import { useState } from 'react';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { clsx } from '~/app/utils/common/class-name';

export default function ContactsView() {
	const [currentView, setCurrentView] = useState<'basic' | 'descriptive'>(
		'descriptive'
	);

	if (currentView === 'basic')
		return (
			<ul
				className={clsx(
					'flex flex-wrap items-center text-xl xl-2-sm:text-3xl gap-4 mt-1 mx-auto w-fit',
					'lg:mx-0'
				)}
			>
				{[
					{
						href: 'tel:+201120841980',
						title: 'whatsapp',
						icon: <BsWhatsapp className='text-teal-500' />
					},
					{
						href: 'https://www.linkedin.com/in/mohamed-shaban-627a44200/',
						title: 'linkedin',
						icon: <BsLinkedin className='text-blue-500' />
					},
					{
						href: 'mailto:mr_mo_bek7290@yahoo.com',
						title: 'email',
						icon: <MdEmail className='text-slate-50' />
					}
				].map((item) => (
					<li key={item.title} className='w-fit flex flex-wrap'>
						<a target='_blank' href={item.href} className='w-fit'>
							{item.icon}
						</a>
					</li>
				))}
				<li className='w-fit flex flex-wrap'>
					<button
						type='button'
						onClick={() => setCurrentView('descriptive')}
						title='toggle contact list view from basic to descriptive'
						className='w-8 h-8 bg-red-500 opacity-10 hover:opacity-70 focus:ring focus:ring-slate-600 transition-opacity hover:duration-150 focus:hover:duration-150 flex items-center justify-center'
					>
						<small className='text-[50%]'>\</small>
					</button>
				</li>
			</ul>
		);

	return (
		<ul
			className={clsx(
				'flex flex-col text-3xl gap-y-2 mt-1 mx-auto w-fit',
				'lg:mx-0'
			)}
		>
			{[
				{
					href: 'https://wa.me/201120841980',
					title: 'whatsapp',
					icon: <BsWhatsapp className='text-teal-500' />
				},
				{
					href: 'https://www.linkedin.com/in/mohamed-shaban-627a44200/',
					title: 'linkedin',
					icon: <BsLinkedin className='text-blue-500' />
				},
				{
					href: 'mailto:mr_mo_bek7290@yahoo.com',
					title: 'email',
					icon: <MdEmail className='text-slate-50' />
				}
			].map((item) => (
				<li key={item.title} className='w-fit flex flex-wrap'>
					<a
						target='_blank'
						href={item.href}
						className='w-fit flex flex-wrap items-end'
					>
						{item.icon}&nbsp;
						<strong className='text-base capitalize'>{item.title}</strong>
					</a>
				</li>
			))}
			<li className='w-fit flex flex-wrap items-end'>
				<button
					type='button'
					onClick={() => setCurrentView('basic')}
					title='toggle contact list view from descriptive to basic'
					className='w-8 h-8 bg-red-500 opacity-10 hover:opacity-70 focus:ring focus:ring-slate-600 transition-opacity hover:duration-150 focus:hover:duration-150 flex items-center justify-center'
				>
					<small className='text-[50%]'>/</small>
				</button>
			</li>
		</ul>
	);
}
