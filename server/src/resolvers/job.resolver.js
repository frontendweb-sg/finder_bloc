import formate from 'date-format';
import { getCompanyById } from "../controllers/company.controller.js"
import { getJobs, getJob, createJob, updateJob, deleteJob } from "../controllers/job.controller.js"
import { isCompanyLoggedIn } from '../middleware/auth.js';

export const jobQuery = {
    job: async (_, args) => await getJob(args.jobId),
    jobs: async (_, args) => await getJobs(),
}

export const JobFieldResolve = {
    company: async (parent) => await getCompanyById(parent.company),
    createdAt: (parent) => formate("MM-dd-yyyy", parent.createdAt),
}

export const jobMutation = {
    createJob: async (_, { job }, { req, res }) => {
        console.log(job);
        await isCompanyLoggedIn(req, res);
        return await createJob(job)
    },
    updateJob: async (_, { job }, { req, res }) => {
        await isCompanyLoggedIn(req, res);
        return await updateJob(job)
    },
    deleteJob: async (_, { jobId }, { req, res }) => {
        await isCompanyLoggedIn(req, res);
        return await deleteJob(jobId);
    },
} 