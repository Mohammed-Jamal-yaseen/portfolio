/** @format */

import Image from "next/image";

const Logo = () => {
	return (
		<Image
			width={14}
			height={14}
			src='vercel.svg'
			alt='logo'
			className='w-12 h-12'
		/>
	);
};

export default Logo;
