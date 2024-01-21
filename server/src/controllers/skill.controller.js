import { Skill } from "../models/skill.model.js"
import { GraphQLError } from "graphql"
/**
 * 
 * @param {Object} queryParam 
 * @returns [Skill]
 */
export const getSkills = async (queryParam = {}) => {
    try {
        const skills = await Skill.find({ ...queryParam });
        return skills;
    }
    catch (error) {
        if (error instanceof MongooseError) {
            error = new BadRequestError(error.message);
        }
        next(error);
    }
}

/**
 * 
 * @param {Object} body 
 * @returns {Skill}
 */
export const addSkill = async (body) => {
    try {
        body.slug = body.title.replace(/\s+/g, '-').toLowerCase();
        const skill = new Skill(body);
        await skill.save();
        return skill;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Update skill
 * @param {Object} body 
 * @returns 
 */
export const updateSkill = async (body) => {
    try {
        const { id, ...rest } = body;
        const hasSkill = await Skill.findById(id);

        if (!hasSkill) {
            throw new GraphQLError(`There is no skill associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }

        const skill = await Skill.findByIdAndUpdate(id, {
            $set: rest
        }, { new: true });

        return skill;
    }
    catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {String} id 
 * @returns {id}
 */
export const deleteSkill = async (id) => {
    try {
        const skill = await Skill.findById(id);

        if (!skill) {
            throw new GraphQLError(`There is no skill associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }

        await Skill.findByIdAndDelete(id);
        return { id };
    }
    catch (error) {
        throw error;
    }
}  