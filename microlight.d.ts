export interface IMicrolight {
	/** Processes code in text into syntax-highlighted html. */
	process (text: string, color: string) : string;
};

export const microlight: IMicrolight;
