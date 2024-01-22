import { createCompany, deleteCompanyById, getCompanies, getCompanyById, updateCompanyById } from "../controllers/company.controller.js"
import { isCompanyLoggedIn } from "../middleware/auth.js";

export const companyQuery = {
    company: async (_, args) => await getCompanyById(args.id),
    companies: async () => await getCompanies(),
}

export const companyMutation = {
    createCompany: async (_, { company }, { req, res }) => {
        await isCompanyLoggedIn(req, res);
        return await createCompany(company);
    },
    updateCompany: async (_, { company }) => await updateCompanyById(company),
    deleteCompany: async (_, { companyId }) => await deleteCompanyById(companyId),
}