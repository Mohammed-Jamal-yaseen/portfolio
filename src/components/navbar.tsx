/** @format */

import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<div className=''>
			<div className='flex items-center justify-between '>
				<Logo />
				<div className='flex items-center gap-x-11 '>
					<Button>Contact</Button>
					<Button>Project</Button>
					<Button>About</Button>
				</div>
				<div className=''>
					<Logo />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
