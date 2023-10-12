import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '../components/common/Tooltip';
import ContactsView from './components/ContactsView';
import { clsx } from '../utils/common/class-name';

export default function Home() {
	return (
		<>
			<header className='fixed inset-x-0 w-full'>
				<div className='bg-slate-900/0 max-w-[2048px] mx-auto px-5 sm:px-20 h-20 flex items-center w-full backdrop-blur-lg'>
					<Link href='/'>
						<strong>Mohamed Bek</strong>
					</Link>
				</div>
			</header>
			<div className='p-10 bg-slate-950 lg:bg-slate-900 w-full' />
			<main className='flex flex-col bg-slate-900 text-white flex-grow w-full lg:px-20 lg:pb-20'>
				<section className='flex bg-slate-950 flex-grow lg:rounded-3xl'>
					<div
						className={clsx(
							'pt-5 pb-20 px-5 sm:px-20 w-full max-w-screen-2xl mx-auto flex-grow',
							'flex flex-col items-center justify-center gap-20',
							'lg:flex-row lg:pt-20 lg:justify-between'
						)}
					>
						<article
							className={clsx(
								'flex flex-col gap-4 max-w-[768px] text-center',
								'lg:text-align-initial'
							)}
						>
							<h1 className='text-6xl'>EST/SAT/ACT Centre</h1>
							<p className='text-4xl'>Mr. Mohamed Abdelkareem</p>
							{/* <div className='flex flex-col gap-2 text-lg'>
								<p>
									<span className='block'>
										<Tooltip title='A computer-based test that measures the readiness of students to enter university, and assesses the level of students in Reading, Writing and Math.'>
											EST
										</Tooltip>
										/
										<Tooltip title='An entrance exam used by most colleges and universities to make admissions decisions. The SAT is a multiple-choice, pencil-and-paper test created and administered by the College Board.'>
											SAT
										</Tooltip>
										/
										<Tooltip title='A curriculum-based education and career planning tool for high school students that assesses the mastery of college readiness standards.'>
											ACT
										</Tooltip>
									</span>
									<span className='block'>Reading, Writing and Language</span>
									<span className='block'>Grades 9, 10, and 11</span>
								</p>
							</div> */}
							<ContactsView />
						</article>
						<figure className='max-w-full sm:w-96 lg:max-w-screen-sm lg:min-w-[20rem] lg:w-2/5'>
							<Image
								// src='https://api.dicebear.com/6.x/lorelei/svg?seed=mohamed-bek'
								src='/images/mohamed-bek.jpg'
								priority
								alt='mohamed-bek'
								width={800}
								height={800}
								className='animate-circlerReveal rounded-full'
								// style={{
								// 	clipPath: 'circle(25% at 56% 27%)',
								// }}
							/>
						</figure>
					</div>
				</section>
			</main>
		</>
	);
}
