import { getSkills, deleteSkill, addSkill, updateSkill } from "../controllers/skill.controller.js"
import { isAdminLoggedIn } from "../middleware/auth.js";

export const skillQuery = {
    skills: async () => await getSkills(),
}

export const skillMutation = {
    // create new skill
    createSkill: async (_, { skill }, { req, res }) => {
        await isAdminLoggedIn(req, res);
        return await addSkill(skill);
    },
    // update existing skill
    updateSkill: async (_, { skill }) => {
        await isAdminLoggedIn(req, res);
        return await updateSkill(skill);
    },
    // delete skill by skill id
    deleteSkill: async (_, { skillId }) => {
        await isAdminLoggedIn(req, res);
        return deleteSkill(skillId);
    }
}