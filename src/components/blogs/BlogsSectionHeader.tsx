export default function BlogsSectionHeader() {
	return (
		<>
			{/* Bars container */}
			<div className="absolute flex flex-col w-full transform -skew-y-6">
				{/* blue bar */}
				<div className="w-full h-12 bg-blue-300" />
				{/* 2nd bar container- pink,white,pink */}
				<div className="grid grid-cols-7 w-full">
					<div className="col-span-2 bg-[#FFDED9] h-12"></div>
					<div className="col-span-2 bg-white h-12"></div>
					<div className="col-span-3 bg-[#FFDED9] h-12"></div>
				</div>
				{/* 3rd bar container - purple,white,purple */}
				<div className="grid grid-cols-15 w-full">
					<div className="col-span-2 bg-purple-300 h-12"></div>
					<div className="col-span-12 bg-white h-12"></div>
					<div className="col-span-1 bg-purple-300 h-12"></div>
				</div>
			</div>

			{/* title and text section  */}
			<div className="relative font-roboto text-center flex flex-col items-center mt-14">
				<p className="text-orange-300 text-[20px] font-[500]">Our Blogs</p>
				<h2 className="font-[700] text-[#0F172A] leading-10 text-[40px] tracking-[-0.02em]">
					Resources and insights
				</h2>
				<p className="text[#0F172A] mt-4 text-balance text-[20px] font-[500]">
					The latest industry news, interviews, technologies, and resources.
				</p>
			</div>
		</>
	);
}
