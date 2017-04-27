declare module 'microlight-string' {
	interface IMicrolight {
		/** Processes code in text into syntax-highlighted html. */
		process (text: string, color: string) : string;
	}

	const microlight: IMicrolight;
}
