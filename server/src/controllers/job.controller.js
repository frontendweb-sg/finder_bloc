import { Job } from "../models/job.model.js"

/**
 * Get all jobs
 */
export const getJobs = async () => {
    try {
        const jobs = await Job.find({});
        return jobs;
    }
    catch (error) { }
}


/**
 * Get job by id
 * @param {id} id 
 * @returns 
 */
export const getJob = async (id) => {
    try {
        const job = await Job.findById(id);
        if (!job) {
            throw new Error("No job found!");
        }
        return job;
    }
    catch (error) { }
}

/**
 * Add new job
 * @constructor
 * @param {String} title
 * @param {String} description
 * @param {Date} createdAt
 * 
 * @returns {
 *  String title,
 *  String description,
 *  Date createdAt
 * }
 */
export const addJob = async (job) => {
    try {
        const newJob = new Job(job);
        await newJob.save();
        return newJob;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Update job
 * @constructor
 * @param {String} id
 * @param {String} title
 * @param {String} description
 * @param {Date} createdAt
 * 
 * @returns {
*  String title,
*  String description,
*  Date createdAt
* }
 */
export const updateJob = async (body) => {
    try {
        const { id, ...rest } = body;
        const hasJob = await Job.findById(id);
        if (!hasJob) {
            throw new GraphQLError(`There is no job associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }
        const job = await Job.findByIdAndUpdate(id, {
            $set: body
        }, { new: true });
        return job;
    }
    catch (error) {
        throw error;
    }
}

/**
 * Delete job by id
 * @param {String} id 
 * @returns {id}
 */
export const deleteJob = async (id) => {
    try {
        const job = await Job.findById(id);

        if (!job) {
            throw new GraphQLError(`There is no job associated with this id ${id}`, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }

        await Job.findByIdAndDelete(id);
        return { id };
    }
    catch (error) {
        throw error;
    }
}

/**
 * Get job by company by id
 * @param {String} id 
 * @returns {[Job]}
 */
export const getJobsByCompany = async (id) => {
    try {
        const jobs = await Job.find({ company: id });
        return jobs;
    }
    catch (error) {
        throw error;
    }
}