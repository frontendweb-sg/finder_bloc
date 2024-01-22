import { getDesignations, addDesignation, updateDesignation, deleteDesignation } from "../controllers/designation.controller.js"
import { isAdminLoggedIn } from "../middleware/auth.js"

export const designationQuery = {
    designations: async (_, { query }) => await getDesignations(query),
}

export const designationMutation = {
    // designation mutation
    createDesignation: async (_, { designation }, { req, res }) => {
        await isAdminLoggedIn(req, res);
        return addDesignation(designation);
    },
    updateDesignation: async (_, { designation }, { req, res }) => {
        await isAdminLoggedIn(req, res);
        return await updateDesignation(designation);
    },
    deleteDesignation: async (_, { designationId }, { req, res }) => {
        await isAdminLoggedIn(req, res);
        return await deleteDesignation(designationId);
    }
}