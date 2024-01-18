import { getCompanies, addNewCompany, deleteCompanyById, getCompanyById, updateCompanyById } from "./controllers/company.controller.js";
import { addJob, deleteJob, getJob, getJobs, getJobsByCompany, updateJob } from "./controllers/job.controller.js";
import formate from 'date-format';
export const resolvers = {
    Query: {
        job: async (_, args) => await getJob(args.jobId),
        jobs: async () => await getJobs(),
        company: async (_, args) => await getCompanyById(args.id),
        companies: async () => await getCompanies(),
    },
    Job: {
        company: async (parent) => await getCompanyById(parent.company),
        createdAt: (parent) => formate("MM-dd-yyyy", parent.createdAt),
    },
    Company: {
        jobs: async (company) => await getJobsByCompany(company.id)
    },
    Mutation: {
        createJob: async (_, args) => await addJob(args.job),
        updateJob: async (_, args) => await updateJob(args.jobId, args.job),
        deleteJob: async (_, args) => await deleteJob(args.jobId),
        createCompany: async (_, args) => await addNewCompany(args.company),
        updateCompany: async (_, args) => await updateCompanyById(args.companyId),
        deleteCompany: async (_, args) => await deleteCompanyById(args.companyId),
    },
}  