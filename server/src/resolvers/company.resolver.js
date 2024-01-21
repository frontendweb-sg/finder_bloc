import { createCompany, deleteCompanyById, getCompanies, getCompanyById, updateCompanyById } from "../controllers/company.controller.js"

export const companyQuery = {
    company: async (_, args) => await getCompanyById(args.id),
    companies: async () => await getCompanies(),
}

export const companyMutation = {
    createCompany: async (_, { company }) => await createCompany(company),
    updateCompany: async (_, { company }) => await updateCompanyById(company),
    deleteCompany: async (_, { companyId }) => await deleteCompanyById(companyId),
}