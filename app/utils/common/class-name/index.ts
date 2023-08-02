export function clsx(...arr: (string | undefined | null)[]) {
	let str = '';

	for (const iterator of arr) {
		if (arr) str += iterator + ' ';
	}

	return str;
}
