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

    }
}

export const updateJob = async (id, body) => {
    try {
        const job = await Job.findByIdAndUpdate(id, {
            $set: body
        }, { new: true });
        return job;
    }
    catch (error) {

    }
}

/**
 * Delete job by id
 * @param {String} id 
 * @returns {}
 */
export const deleteJob = async (id) => {
    try {
        const job = await Job.findByIdAndDelete(id);
        return job;
    } catch (error) {

    }
}


export const getJobsByCompany = async (id) => {
    try {
        const jobs = await Job.find({ company: id });
        return jobs;
    } catch (error) {

    }
}