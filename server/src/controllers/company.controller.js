import { Company } from "../models/company.model.js"
import { GraphQLError } from 'graphql'
/**
 * Get all companies
 * @param {Object} query 
 */
export const getCompanies = async (query = {}) => {
    try {
        const companies = await Company.find(query);
        return companies;
    } catch (error) {
        throw error;
    }
}

/**
 * Get company by id
 * @param {String} id 
 */
export const getCompanyById = async (id) => {
    try {
        const company = await Company.findById(id);

        if (!company) {
            throw new GraphQLError(`There is no company associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }

        return company;
    } catch (error) {
        throw error;
    }
}
/**
 * Add new company
 * @param {Object} body 
 */
export const createCompany = async (body) => {
    try {
        body.slug = body.name.replace(/\s+/g, '-').toLowerCase();
        const company = new Company(body);
        await company.save();
        return company;
    } catch (error) {
        throw error;
    }
}

/**
 * Update company
 * @constructor
 * @param {{String id, String title}} body 
 * @returns {Company}
 */
export const updateCompanyById = async (body) => {
    try {
        const { id, ...rest } = body;
        const hasCompany = await Company.findById(id);
        if (!hasCompany) {
            throw new GraphQLError(`There is no company associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }

        rest.slug = rest.name.replace(/\s+/g, '-').toLowerCase();
        const company = await Company.findByIdAndUpdate(id, {
            $set: rest
        }, {
            new: true
        });
        return company;
    } catch (error) {
        throw error;
    }
}

/**
 * Delete company by id
 * @param {String} id 
 */
export const deleteCompanyById = async (id) => {
    try {
        const company = await Company.findById(id);
        if (!company) {
            throw new GraphQLError(`There is no company associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }
        await Company.findByIdAndDelete(id);
        return { id };
    } catch (error) {
        throw error;
    }
}