export const extractTime = (isoString) => {
	const date = new Date(isoString);
	let hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	const strMinutes = minutes < 10 ? '0' + minutes : minutes;
	const formattedTime = `${hours}:${strMinutes} ${ampm}`;
	return formattedTime;
  };
  