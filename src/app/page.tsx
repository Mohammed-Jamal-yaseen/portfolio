/** @format */

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div className=' '>
			<main className='lg:space-y-48 space-y-10  '>
				<div className='lg:px-20 '>
					<Hero />
				</div>
				<div className='relative'>
					<hr className='transform lg:translate-x-48 absolute -left-10 -right-10 lg:relative     ' />
				</div>
				<div className='lg:px-20 pt-10 lg:pt-0 '>
					<About />
				</div>
				<div className='lg:px-20 pt-10 lg:pt-0 '>...</div>
			</main>
		</div>
	);
}
export const Hero = () => {
	return (
		<div className='flex flex-col lg:flex-row  lg:items-center gap-10'>
			<div className=''>
				<span className='font-bold text-sm   '> Mohammed jamal </span>
				<div className='space-y-10'>
					<div className=' space-y-2'>
						<h1 className='text-4xl text-black font-bold '>
							Frontend && Backend Developer.
						</h1>
						<p>
							Hi, I’m <strong>Mohammed jamal</strong>, a Full-Stack Developer
							specializing in building seamless, high-performance web
							applications. From crafting dynamic front-end interfaces to
							architecting robust backend solutions, I bring ideas to life with
							clean code and modern technologies. Let’s build something amazing
							together! [📩 Contact Me] [📂 View My Work]
						</p>
					</div>
					<div className='flex items-center  gap-x-10 '>
						<Button>Get In Touch</Button>
						<div className='flex items-center gap-x-2'>
							<span className='w-4 h-4 rounded-full bg-green-600' />
							<span>Available Now </span>
						</div>
					</div>
				</div>
			</div>

			<section className='flex items-center justify-center'>
				<div className='relative w-72 h-72 md:w-80 md:h-80'>
					<Image
						src='/me.png' // Replace with your image path
						alt='Profile Picture'
						layout='fill'
						objectFit='cover'
						className='rounded-[40px] rounded-b-[90px] shadow-lg'
						style={{
							clipPath: " polygon(0 0, 100% 0, 82% 100%, 18% 100%)",
						}}
					/>
				</div>
			</section>
		</div>
	);
};
export const About = () => {
	return (
		<div className='flex flex-col lg:flex-row  lg:items-center gap-10'>
			<section className='relative'>
				<div className='absolute w-36  h-64 md:w-40 md:h-72 bg-black -left-3 -top-3  -z-10  '></div>
				<div className=' w-72 h-72 md:w-80 md:h-80'>
					<Image
						src='/me.png' // Replace with your image path
						alt='Profile Picture'
						className='w-full h-full  '
						width={400}
						height={400}
					/>
				</div>
			</section>
			<div className='space-y-5  '>
				<div className='-space-y-.5  flex flex-col  w-fit '>
					<h1 className='text-5xl text-black font-bold   '>About Me </h1>
					<h5 className='font-bold text-sm     flex gap-x-2 justify-end '>
						<span>______</span>
						<span>Who Am I ?</span>
					</h5>
				</div>
				<div className='space-y-10'>
					<p>
						Hi, I’m <strong>Mohammed jamal</strong>, a Full-Stack Developer
						specializing in building seamless, high-performance web
						applications. From crafting dynamic front-end interfaces to
						architecting robust backend solutions, I bring ideas to life with
						clean code and modern technologies. Let’s build something amazing
						together! [📩 Contact Me] [📂 View My Work]
					</p>
					<div className='flex gap-x-5 '>
						<div className=''>
							<Image
								src='globe.svg'
								alt='any thing'
								width={30}
								height={30}
								className='w-10 h-10 '
							/>
							<h5>{"HTML"}</h5>
						</div>
						<div className=''>
							<Image
								src='globe.svg'
								alt='any thing'
								width={30}
								height={30}
								className='w-10 h-10 '
							/>
							<h5>{"HTML"}</h5>
						</div>
						<div className=''>
							<Image
								src='globe.svg'
								alt='any thing'
								width={30}
								height={30}
								className='w-10 h-10 '
							/>
							<h5>{"HTML"}</h5>
						</div>
						<div className=''>
							<Image
								src='globe.svg'
								alt='any thing'
								width={30}
								height={30}
								className='w-10 h-10 '
							/>
							<h5>{"HTML"}</h5>
						</div>
						<div className=''>
							<Image
								src='globe.svg'
								alt='any thing'
								width={30}
								height={30}
								className='w-10 h-10 '
							/>
							<h5>{"HTML"}</h5>
						</div>
						<div className=''>
							<Image
								src='globe.svg'
								alt='any thing'
								width={30}
								height={30}
								className='w-10 h-10 '
							/>
							<h5>{"HTML"}</h5>
						</div>
					</div>
					<div className='flex items-center  gap-x-10 '>
						<Button variant='ghost' className='border-primary'>
							Download Resume
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
