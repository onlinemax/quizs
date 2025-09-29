import * as z from "zod"
import data from "./data.json";

const Question = z.object({
	question: z.string(),
	answer: z.string().optional(),
})

const Section = z.object({
	title: z.string(),
	questions: z.array(Question)
})

export const Data = z.object({
	data: z.record(z.string(),
		z.record(z.string(),
			z.object({
				sections: z.array(Section)
			})
		)
	),
})

export type DataType = z.infer<typeof Data>;
export type SectionType = z.infer<typeof Section>;
export type QuestionType = z.infer<typeof Question>;

export function getData() {
	const d = Data.safeParse(data);
	if (d.success) {
		return d.data;
	}
	return null;
}

