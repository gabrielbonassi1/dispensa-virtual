function getCallerFileName(): string {
	const stack = new Error().stack;

	if (!stack) {
		return 'unknown';
	}

	const lines = stack.split('\n').map((line) => line.trim());

	for (const line of lines) {
		if (line.includes('getCallerFileName') || line.includes('logWithCaller')) {
			continue;
		}

		const fileMatch = line.match(/(?:\()?(?:.*\/)?([^/\\\s]+\.[jt]sx?)(?::\d+:\d+)?\)?$/i);
		if (fileMatch?.[1]) {
			return fileMatch[1];
		}
	}

	return 'unknown';
}

export function logWithCaller(...args: unknown[]): void {
	const callerFile = getCallerFileName();
	console.log(`[${callerFile}]`, ...args);
}

export function errorWithCaller(...args: unknown[]): void {
	const callerFile = getCallerFileName();
	console.error(`[${callerFile}]`, ...args);
}
