import type { PageLoad } from "./$types"
export const load: PageLoad = ({ params }) => {
	return {
		subject: params.name,
		quiz: params.quiz
	}
}


