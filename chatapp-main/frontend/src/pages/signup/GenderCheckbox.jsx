const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	const handleCheckboxChange = (gender) => {
		// Toggle the checkbox
		if (selectedGender === gender) {
			onCheckboxChange(""); // Uncheck if the selected gender matches
		} else {
			onCheckboxChange(gender); // Check the new gender
		}
	};

	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
					<span className='text-gray-50'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-2 border-gray-100'
						checked={selectedGender === "male"}
						onChange={() => handleCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='text-gray-50'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-2 border-gray-100'
						checked={selectedGender === "female"}
						onChange={() => handleCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;

// STARTER CODE FOR THIS FILE
// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Male</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Female</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;
