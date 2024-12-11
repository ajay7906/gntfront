



import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Career = () => {
    const [jobs, setJobs] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filter states
    const [departmentFilter, setDepartmentFilter] = useState('All');
    const [locationFilter, setLocationFilter] = useState('All');

    // Form states
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [experience, setExperience] = useState("");
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");

    // Fetch jobs
    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://gntindia.com:5000/api/v1/job/getJob", {
                params: {
                    department: departmentFilter,
                    location: locationFilter
                }
            });
            console.log(response);

            setJobs(response.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch jobs");
            setJobs([]);
            toast.error("Failed to fetch jobs");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [departmentFilter, locationFilter]);
    console.log(jobs);
    console.log(jobs?.title);


    const handleSubmit = async (isUpdate = false) => {
        try {
            const jobData = {
                title,
                location,
                type,
                experience,
                department,
                description,
                skills: skills.split(',').map(skill => skill.trim())
            };

            if (isUpdate && selectedJob) {
                await axios.put(`https://gntindia.com:5000/api/v1/jobs/updatejob/${selectedJob.id}`, jobData);
                setShowUpdateModal(false);
                toast.success("Job updated successfully!");
            } else {
                await axios.post("https://gntindia.com:5000/api/v1/job/getjob", jobData);
                setShowAddModal(false);
                toast.success("Job added successfully!");
            }

            // Reset form fields
            resetFormFields();
            fetchJobs();
        } catch (error) {
            console.error("Error saving job post:", error);
            toast.error("Failed to save job post");
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://gntindia.com:5000/api/v1/jobs/deletejob/${selectedJob.id}`);
            setShowDeleteModal(false);
            fetchJobs();
            toast.success("Job deleted successfully!");
        } catch (error) {
            console.error("Error deleting job:", error);
            toast.error("Failed to delete job");
        }
    };

    const resetFormFields = () => {
        setTitle("");
        setLocation("");
        setType("");
        setExperience("");
        setDepartment("");
        setDescription("");
        setSkills("");
    };






    // const Modal = ({ show, onClose, title, children }) => {
    //     if (!show) return null;

    //     return (
    //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-48 z-50">
    //             <div className="bg-white rounded-lg w-full max-w-md">
    //                 <div className="flex justify-between items-center p-4 border-b">
    //                     <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    //                     <button
    //                         onClick={onClose}
    //                         className="text-gray-400 hover:text-gray-500"
    //                     >
    //                         ×
    //                     </button>
    //                 </div>
    //                 <div className="p-4">{children}</div>
    //             </div>
    //         </div>
    //     );
    // };
   

    const Modal = ({ show, onClose, title, children }) => {
        if (!show) return null;
    
        return (
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 pt-64"
                onClick={(e) => {
                    // Close modal only if clicking on the overlay
                    if (e.target === e.currentTarget) onClose();
                }}
            >
                <div className="bg-white rounded-lg w-full max-w-md mx-auto relative">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 text-2xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        );
    };














    // const JobForm = ({ isUpdate = false }) => (
    //     <div className="space-y-4">
    //         <input
    //             type="text"
    //             placeholder="Job Title"
    //             value={title}
    //             onChange={(e) => {
                   
    //                 setTitle(e.target.value);
    //             }}
              
    //             className="w-full p-2 rounded-md border border-gray-300"
    //             onFocus={() => console.log('Input focused')}
    //             required
    //         />
    //         <input
    //             type="text"
    //             placeholder="Location"
    //             value={location}
    //             onChange={(e) => setLocation(e.target.value)}
    //             className="w-full p-2 rounded-md border border-gray-300"
    //             required
    //         />
    //         <select
    //             value={type}
    //             onChange={(e) => setType(e.target.value)}
    //             className="w-full p-2 rounded-md border border-gray-300"
    //             required
    //         >
    //             <option value="">Job Type</option>
    //             <option value="Full-time">Full-time</option>
    //             <option value="Part-time">Part-time</option>
    //             <option value="Contract">Contract</option>
    //             <option value="Freelance">Freelance</option>
    //         </select>
    //         <input
    //             type="text"
    //             placeholder="Experience Level"
    //             value={experience}
    //             onChange={(e) => setExperience(e.target.value)}
    //             className="w-full p-2 rounded-md border border-gray-300"
    //             required
    //         />
    //         <select
    //             value={department}
    //             onChange={(e) => setDepartment(e.target.value)}
    //             className="w-full p-2 rounded-md border border-gray-300"
    //             required
    //         >
    //             <option value="">Select Department</option>
    //             <option value="Engineering">Engineering</option>
    //             <option value="Marketing">Marketing</option>
    //             <option value="Sales">Sales</option>
    //             <option value="HR">HR</option>
    //             <option value="Finance">Finance</option>
    //             <option value="Product">Product</option>
    //         </select>
    //         <textarea
    //             placeholder="Job Description"
    //             value={description}
    //             onChange={(e) => setDescription(e.target.value)}
    //             className="w-full p-2 rounded-md border border-gray-300"
    //             required
    //             rows={4}
    //         />
    //         <input
    //             type="text"
    //             placeholder="Skills (comma-separated)"
    //             value={skills}
    //             onChange={(e) => setSkills(e.target.value)}
    //             className="w-full p-2 rounded-md border border-gray-300"
    //             required
    //         />
    //         <button
    //             onClick={() => handleSubmit(isUpdate)}
    //             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    //         >
    //             {isUpdate ? "Update Job" : "Post Job"}
    //         </button>
    //     </div>
    // );



    const JobForm = ({ isUpdate = false }) => {
        // Local state for form fields
        const [localTitle, setLocalTitle] = useState(isUpdate && selectedJob ? selectedJob.title : "");
        const [localLocation, setLocalLocation] = useState(isUpdate && selectedJob ? selectedJob.location : "");
        const [localType, setLocalType] = useState(isUpdate && selectedJob ? selectedJob.type : "");
        const [localExperience, setLocalExperience] = useState(isUpdate && selectedJob ? selectedJob.experience : "");
        const [localDepartment, setLocalDepartment] = useState(isUpdate && selectedJob ? selectedJob.department : "");
        const [localDescription, setLocalDescription] = useState(isUpdate && selectedJob ? selectedJob.description : "");
        const [localSkills, setLocalSkills] = useState(isUpdate && selectedJob ? (selectedJob.skills ? selectedJob.skills.join(', ') : '') : '');
    
        const handleSubmitLocal = () => {
            // Update parent component's state before submission
            setTitle(localTitle);
            setLocation(localLocation);
            setType(localType);
            setExperience(localExperience);
            setDepartment(localDepartment);
            setDescription(localDescription);
            setSkills(localSkills);
    
            // Call the submit function with a slight delay to ensure state update
            setTimeout(() => {
                handleSubmit(isUpdate);
            }, 0);
        };
    
        return (
            <div className="space-y-4 ">
                <input
                    type="text"
                    placeholder="Job Title"
                    value={localTitle}
                    onChange={(e) => setLocalTitle(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300"
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={localLocation}
                    onChange={(e) => setLocalLocation(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300"
                    required
                />
                <select
                    value={localType}
                    onChange={(e) => setLocalType(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300"
                    required
                >
                    <option value="">Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                </select>
                <input
                    type="text"
                    placeholder="Experience Level"
                    value={localExperience}
                    onChange={(e) => setLocalExperience(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300"
                    required
                />
                <select
                    value={localDepartment}
                    onChange={(e) => setLocalDepartment(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300"
                    required
                >
                    <option value="">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Product">Product</option>
                </select>
                <textarea
                    placeholder="Job Description"
                    value={localDescription}
                    onChange={(e) => setLocalDescription(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300"
                    required
                    rows={4}
                />
                <input
                    type="text"
                    placeholder="Skills (comma-separated)"
                    value={localSkills}
                    onChange={(e) => setLocalSkills(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300"
                    required
                />
                <button
                    onClick={handleSubmitLocal}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    {isUpdate ? "Update Job" : "Post Job"}
                </button>
            </div>
        );
    };



















    return (
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Career Opportunities</h2>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                    Add Job
                </button>
            </div>

            {/* Filters */}
            <div className="flex space-x-4 mb-6">
                <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    className="w-1/2 p-2 rounded-md border border-white/20 bg-white/5 text-white"
                >
                    <option value="All">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Product">Product</option>
                </select>
                <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-1/2 p-2 rounded-md border border-white/20 bg-white/5 text-white"
                >
                    <option value="All">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            {loading && (
                <div className="text-white text-center py-4">Loading jobs...</div>
            )}

            {error && (
                <div className="text-red-500 text-center py-4">{error}</div>
            )}

            <div className="space-y-4">
                {jobs?.length === 0 ? (
                    <div className="text-center text-white py-4">No jobs found</div>
                ) : (
                    jobs?.map((job) => (
                        <div
                            key={job.id}
                            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1 mr-4">
                                    <h3 className="text-xl font-semibold text-white">{job?.title}</h3>


                                    <p className="text-gray-300 mt-2 line-clamp-2">{job?.description}</p>
                                    <div className="text-sm text-gray-400 mt-1 space-y-1">
                                        <div>Department: {job?.department}</div>
                                        <div>Location: {job?.location}</div>
                                        <div>Experience: {job?.experience}</div>
                                        <div>Type: {job?.type}</div>
                                        {/* <div>Skills: {job?.skills ? JSON.parse(job.skills).join(', ') : 'N/A'}</div> */}
                                        <div>Skills: {job.skills ? job.skills.join(', ') : 'N/A'}</div>
                                    </div>
                                </div>
                                <div className="space-x-2 flex-shrink-0">
                                    <button
                                        onClick={() => {
                                            setSelectedJob(job);
                                            setTitle(job.title);
                                            setLocation(job.location);
                                            setType(job.type);
                                            setExperience(job.experience);
                                            setDepartment(job.department);
                                            setDescription(job.description);
                                            setSkills(job.skills ? JSON.parse(job.skills).join(', ') : '');
                                            setShowUpdateModal(true);
                                        }}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedJob(job);
                                            setShowDeleteModal(true);
                                        }}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add Job Modal */}
            <Modal
                show={showAddModal}
                onClose={() => setShowAddModal(false)}
                title="Add New Job"
            >
                <JobForm />
            </Modal>

            {/* Update Job Modal */}
            <Modal
                show={showUpdateModal}
                onClose={() => setShowUpdateModal(false)}
                title="Update Job"
            >
                <JobForm isUpdate={true} />
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                title="Confirm Delete"
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Are you sure you want to delete this job posting?
                    </p>
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={() => setShowDeleteModal(false)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Toast Notifications */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Career;






































































































