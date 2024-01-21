import { getSkills, deleteSkill, addSkill, updateSkill } from "../controllers/skill.controller.js"

export const skillQuery = {
    skills: async (_, args) => await getSkills(),
}

export const skillMutation = {
    // skills mutation
    createSkill: async (_, { skill }) => addSkill(skill),
    updateSkill: async (_, { skill }) => updateSkill(skill),
    deleteSkill: async (_, { id }) => deleteSkill(id)
}