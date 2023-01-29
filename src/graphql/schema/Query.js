// GQL string
export default `
	type Query {
		ping: String!,
		opportunityById(id: Int!): Opportunity
		opportunities(
			categories: [Int],
			eligibilities: [Int]
		): [Opportunity]
		categories: [Category]
		eligibilities: [Eligibility]
		authenticatedUser: User
	}
`;
