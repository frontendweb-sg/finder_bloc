import { Designation } from "../models/designation.model.js"
import { GraphQLError } from "graphql";

/**
 * Get all designations
 * @param {Object} queryParam 
 * @returns [Designation]
 */
export const getDesignations = async (queryParam = {}) => {
    try {
        const designations = await Designation.find({ ...queryParam });
        return designations;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Add designation
 * @constructor
 * @param {Object} body 
 * @returns {Designation}
 */
export const addDesignation = async (body) => {
    try {
        body.slug = body.title.replace(/\s+/g, '-').toLowerCase();
        const designation = new Designation(body);
        await designation.save();
        return designation;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Update designation
 * @constructor
 * @param {Object} body 
 * @returns {Designation}
 */
export const updateDesignation = async (body) => {
    try {
        const { id, ...rest } = body;
        const hasDesignation = await Designation.findById(id);
        if (!hasDesignation) {
            throw new GraphQLError(`There is no designation associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }
        rest.slug = rest.title.replace(/\s+/g, '-').toLowerCase();
        const designation = await Designation.findByIdAndUpdate(id, {
            $set: rest
        }, { new: true });
        return designation;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Delete skill
 * @constructor
 * @param {String} id - skillId 
 * @returns {{String skillId}}
 */
export const deleteDesignation = async (id) => {
    try {
        const designation = await Designation.findById(id);

        if (!designation) {
            throw new GraphQLError(`There is no designation associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }

        await Designation.findByIdAndDelete(id);
        return { skillId: id };
    }
    catch (error) {
        throw error;
    }
}  