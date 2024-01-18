import { Company } from "../models/company.model.js"

/**
 * Get all companies
 * @param {Object} query 
 */
export const getCompanies = async (query = {}) => {
    try {
        const companies = await Company.find(query);
        return companies;
    } catch (error) {

    }
}

/**
 * Get company by id
 * @param {String} id 
 */
export const getCompanyById = async (id) => {
    try {
        const company = await Company.findById(id);
        return company;
    } catch (error) {

    }
}
/**
 * Add new company
 * @param {Object} body 
 */
export const addNewCompany = async (body) => {
    try {
        const company = new Company(body);
        await company.save();
        return company;
    } catch (error) {

    }
}


export const updateCompanyById = async (id, body) => {
    try {
        const company = await Company.findByIdAndUpdate(id, {
            $set: body
        }, {
            new: true
        });
        return company;
    } catch (error) {

    }
}

/**
 * Delete company by id
 * @param {String} id 
 */
export const deleteCompanyById = async (id) => {
    try {
        const company = await Company.findByIdAndDelete(id);
        return company;
    } catch (error) {

    }
}