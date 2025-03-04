/** @format */

import Image from "next/image";
import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<div className=''>
			<div className='flex items-center justify-between '>
				<Logo />
				<div className='lg:flex items-center gap-x-11  hidden'>
					<Button>Contact</Button>
					<Button>Project</Button>
					<Button>About</Button>
				</div>
				<div className=''>
					<Image
						src='next.svg'
						alt='svg'
						width={60}
						height={60}
						className='w-6 h-6'
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
