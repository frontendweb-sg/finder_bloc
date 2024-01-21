import { addNewCompany, deleteCompanyById, getCompanies, getCompanyById, updateCompanyById } from "../controllers/company.controller.js"

export const companyQuery = {
    company: async (_, args) => await getCompanyById(args.id),
    companies: async () => await getCompanies(),
}

export const companyMutation = {
    createCompany: async (_, args) => await addNewCompany(args.company),
    updateCompany: async (_, args) => await updateCompanyById(args.companyId),
    deleteCompany: async (_, args) => await deleteCompanyById(args.companyId),
}