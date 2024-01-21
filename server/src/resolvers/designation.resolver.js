import { getDesignations, addDesignation, updateDesignation, deleteDesignation } from "../controllers/designation.controller.js"

export const designationQuery = {
    designations: async (_, { query }) => await getDesignations(query),
}

export const designationMutation = {
    // designation mutation
    createDesignation: async (_, { designation }) => addDesignation(designation),
    updateDesignation: async (_, { designation }) => updateDesignation(designation),
    deleteDesignation: async (_, { id }) => deleteDesignation(id)
}