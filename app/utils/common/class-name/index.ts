export function clsx(...arg: (string | undefined | null)[]) {
	// arguments.length
	let str = '';

	for (const iterator of arg) {
		if (arg) str += arg + ' ';
	}

	return str;
}
