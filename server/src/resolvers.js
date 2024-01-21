import { skillQuery, skillMutation } from './resolvers/skill.resolver.js';
import { designationQuery, designationMutation } from './resolvers/designation.resolver.js';
import { jobQuery, jobMutation, JobFieldResolve } from './resolvers/job.resolver.js';
import { companyQuery, companyMutation } from './resolvers/company.resolver.js';

/**
 * Resolver
 */
export const resolvers = {
    Query: {
        // jobs
        ...jobQuery,

        // company
        ...companyQuery,

        // skills
        ...skillQuery,

        // designations
        ...designationQuery
    },
    Job: JobFieldResolve,
    Mutation: {
        // job mutation
        ...jobMutation,

        // company mutation
        ...companyMutation,

        // skill mutation
        ...skillMutation,

        // designation mutation
        ...designationMutation
    }
}  