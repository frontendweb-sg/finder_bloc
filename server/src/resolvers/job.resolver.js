import { getCompanyById } from "../controllers/company.controller.js"
import { getJobs, getJob, addJob, updateJob, deleteJob } from "../controllers/job.controller.js"
import formate from 'date-format';


export const jobQuery = {
    job: async (_, args) => await getJob(args.jobId),
    jobs: async (_, args, context) => await getJobs(),
}

export const JobFieldResolve = {
    company: async (parent) => await getCompanyById(parent.company),
    createdAt: (parent) => formate("MM-dd-yyyy", parent.createdAt),
}

export const jobMutation = {
    createJob: async (_, args) => await addJob(args.job),
    updateJob: async (_, args) => await updateJob(args.jobId, args.job),
    deleteJob: async (_, args) => await deleteJob(args.jobId),
}