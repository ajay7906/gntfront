



// import { useState } from 'react';
// import axios from 'axios';

// import { useState } from "react";

// const Blog = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       // Check if an image is selected
//       if (!image) {
//         console.error('No image selected');
//         return;
//       }

//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('image', image); // Ensure the file is correctly added

//       // Log form data keys and values for debugging
//       for (let [key, value] of formData.entries()) {
//         console.log(key, value);
//       }

//       await axios.post('http://localhost:5000/api/v1/blog/createblog', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Reset form fields
//       setTitle('');
//       setDescription('');
//       setImage(null);

//       console.log('Blog post submitted successfully');
//     } catch (error) {
//       console.error('Error saving blog post:', error);
//     }
//   };

//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
//       <div className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         ></textarea>
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Blog;




























// const Blog = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [option, setOption] = useState(''); // New state for the option field
//   const [image, setImage] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('option', option); // Append the option field
//       formData.append('image', image);
//       console.log([...formData]); // Debug: Check FormData content

//       await axios.post('http://localhost:5000/api/v1/blog/createblog', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Reset form fields
//       setTitle('');
//       setDescription('');
//       setOption(''); // Reset the option field
//       setImage(null);
//     } catch (error) {
//       console.error('Error saving blog post:', error);
//     }
//   };

//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
//       <div className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         ></textarea>
//         <input
//           type="text"
//           placeholder="Option" // New input field
//           value={option}
//           onChange={(e) => setOption(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Blog;














































// import React, { useState } from "react";
// import axios from "axios";

// const Blog = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [option, setOption] = useState(""); // New state for the option field
//   const [image, setImage] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("option", option); // Append the selected option
//       formData.append("image", image);

//       console.log([...formData]); // Debug: Check FormData content

//       await axios.post("http://88.222.213.80:5000/api/v1/blog/createblog", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Reset form fields
//       setTitle("");
//       setDescription("");
//       setOption(""); // Reset the option field
//       setImage(null);
//     } catch (error) {
//       console.error("Error saving blog post:", error);
//     }
//   };

//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
//       <div className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         ></textarea>

//         {/* Dropdown for selecting the option */}
//         <select
//           value={option}
//           onChange={(e) => setOption(e.target.value)}
//           className="w-full p-2 rounded-md bg-white/5 text-black"
//         >
//           <option value="">Select an option</option> {/* Default placeholder */}
//           <option value="Educational Content">Educational Content</option>
//           <option value="Regular Update">Regular Update</option>
//           <option value="SEO Benefits">SEO Benefits</option>
//         </select>

//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 rounded-md bg-white/5 text-white"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Blog;





























































































// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
  
//   // Form states
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [option, setOption] = useState("");
//   const [image, setImage] = useState(null);



//   // Fetch blogs
//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get("http://88.222.213.80:5000/api/v1/blog/getblog");
//       setBlogs(response.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);






//   // Handle form submission for create/update
//   const handleSubmit = async (isUpdate = false) => {
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("option", option);
//       if (image) {
//         formData.append("image", image);
//       }

//       if (isUpdate) {
//         await axios.put(
//           `http://88.222.213.80:5000/api/v1/blog/updateblog/${selectedBlog.id}`,
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         setShowUpdateModal(false);
//       } else {
//         await axios.post(
//           "http://88.222.213.80:5000/api/v1/blog/createblog",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         setShowAddModal(false);
//       }

//       // Reset form and refresh blogs
//       setTitle("");
//       setDescription("");
//       setOption("");
//       setImage(null);
//       fetchBlogs();
//     } catch (error) {
//       console.error("Error saving blog post:", error);
//     }
//   };


//   console.log(blogs);
  
//   console.log(blogs.data);
  

//   // Handle delete
//   const handleDelete = async () => {
//     try {
//       await axios.delete(
//         `http://88.222.213.80:5000/api/v1/blog/deleteblog/${selectedBlog.id}`
//       );
//       setShowDeleteModal(false);
//       fetchBlogs();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   // Modal Component
//   const Modal = ({ show, onClose, title, children }) => {
//     if (!show) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-lg w-full max-w-md">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-500"
//             >
//               ×
//             </button>
//           </div>
//           <div className="p-4">{children}</div>
//         </div>
//       </div>
//     );
//   };

//   // Form Component
//   const BlogForm = ({ isUpdate = false }) => (
//     <div className="space-y-4">
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full p-2 rounded-md border border-gray-300"
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="w-full p-2 rounded-md border border-gray-300"
//       />
//       <select
//         value={option}
//         onChange={(e) => setOption(e.target.value)}
//         className="w-full p-2 rounded-md border border-gray-300"
//       >
//         <option value="">Select an option</option>
//         <option value="Educational Content">Educational Content</option>
//         <option value="Regular Update">Regular Update</option>
//         <option value="SEO Benefits">SEO Benefits</option>
//       </select>
//       <input
//         type="file"
//         onChange={(e) => setImage(e.target.files[0])}
//         className="w-full p-2"
//       />
//       <button
//         onClick={() => handleSubmit(isUpdate)}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         {isUpdate ? "Update" : "Submit"}
//       </button>
//     </div>
//   );

//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-white">Blogs</h2>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Add Blog
//         </button>
//       </div>

//       {/* Blog List */}
//       <div className="space-y-4">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="p-4 rounded-lg bg-white/5 border border-white/10"
//           >
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
//                 <p className="text-gray-300 mt-2">{blog.description}</p>
//                 <span className="text-sm text-gray-400 mt-1">{blog.option}</span>
//               </div>
//               <div className="space-x-2">
//                 <button
//                   onClick={() => {
//                     setSelectedBlog(blog);
//                     setTitle(blog.title);
//                     setDescription(blog.description);
//                     setOption(blog.option);
//                     setShowUpdateModal(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => {
//                     setSelectedBlog(blog);
//                     setShowDeleteModal(true);
//                   }}
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Modal */}
//       <Modal
//         show={showAddModal}
//         onClose={() => setShowAddModal(false)}
//         title="Add New Blog"
//       >
//         <BlogForm />
//       </Modal>

//       {/* Update Modal */}
//       <Modal
//         show={showUpdateModal}
//         onClose={() => setShowUpdateModal(false)}
//         title="Update Blog"
//       >
//         <BlogForm isUpdate={true} />
//       </Modal>

//       {/* Delete Confirmation Modal */}
//       <Modal
//         show={showDeleteModal}
//         onClose={() => setShowDeleteModal(false)}
//         title="Confirm Delete"
//       >
//         <div className="space-y-4">
//           <p className="text-gray-700">
//             Are you sure you want to delete this blog post?
//           </p>
//           <div className="flex justify-end space-x-2">
//             <button
//               onClick={() => setShowDeleteModal(false)}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleDelete}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Blog;





































































































// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Form states
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [option, setOption] = useState("");
//   const [image, setImage] = useState(null);

//   // Fetch blogs
//   // const fetchBlogs = async () => {
//   //   try {
//   //     setLoading(true);
//   //     const response = await axios.get("http://88.222.213.80:5000/api/v1/blog/getblog");
//   //     // Check the structure of response.data and adjust accordingly
//   //     const blogsData = response.data.blogs || response.data || [];
//   //     setBlogs(Array.isArray(blogsData) ? blogsData : []);
//   //     setError(null);
//   //   } catch (error) {
//   //     console.error("Error fetching blogs:", error);
//   //     setError("Failed to fetch blogs");
//   //     setBlogs([]);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

  

//   // Fetch blogs
//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get("http://88.222.213.80:5000/api/v1/blog/getblog");
//       setBlogs(response.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   // useEffect(() => {
//   //   fetchBlogs();
//   // }, []);









//   useEffect(() => {
//     fetchBlogs();
//   }, []);




//   console.log(blogs);
  

//   // Handle form submission for create/update
//   const handleSubmit = async (isUpdate = false) => {
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("option", option);
//       if (image) {
//         formData.append("image", image);
//       }

//       if (isUpdate && selectedBlog) {
//         await axios.put(
//           `http://88.222.213.80:5000/api/v1/blog/updateblog/${selectedBlog._id}`, // Changed from id to _id
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         setShowUpdateModal(false);
//       } else {
//         await axios.post(
//           "http://88.222.213.80:5000/api/v1/blog/createblog",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );
//         setShowAddModal(false);
//       }

//       // Reset form and refresh blogs
//       setTitle("");
//       setDescription("");
//       setOption("");
//       setImage(null);
//       fetchBlogs();
//     } catch (error) {
//       console.error("Error saving blog post:", error);
//       alert("Failed to save blog post");
//     }
//   };

//   // Handle delete
//   const handleDelete = async () => {
//     try {
//       await axios.delete(
//         `http://88.222.213.80:5000/api/v1/blog/deleteblog/${selectedBlog._id}` // Changed from id to _id
//       );
//       setShowDeleteModal(false);
//       fetchBlogs();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//       alert("Failed to delete blog");
//     }
//   };

//   // Modal Component
//   const Modal = ({ show, onClose, title, children }) => {
//     if (!show) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-48 z-50">
//         <div className="bg-white rounded-lg w-full max-w-md">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-500"
//             >
//               ×
//             </button>
//           </div>
//           <div className="p-4">{children}</div>
//         </div>
//       </div>
//     );
//   };

//   // Form Component
//   const BlogForm = ({ isUpdate = false }) => (
//     <div className="space-y-4">
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full p-2 rounded-md border border-gray-300"
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="w-full p-2 rounded-md border border-gray-300"
//       />
//       <select
//         value={option}
//         onChange={(e) => setOption(e.target.value)}
//         className="w-full p-2 rounded-md border border-gray-300"
//       >
//         <option value="">Select an option</option>
//         <option value="Educational Content">Educational Content</option>
//         <option value="Regular Update">Regular Update</option>
//         <option value="SEO Benefits">SEO Benefits</option>
//       </select>
//       <input
//         type="file"
//         onChange={(e) => setImage(e.target.files[0])}
//         className="w-full p-2"
//       />
//       <button
//         onClick={() => handleSubmit(isUpdate)}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         {isUpdate ? "Update" : "Submit"}
//       </button>
//     </div>
//   );

//   return (
//     <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-white">Blogs</h2>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Add Blog
//         </button>
//       </div>

//       {/* Loading State */}
//       {loading && (
//         <div className="text-white text-center py-4">Loading blogs...</div>
//       )}

//       {/* Error State */}
//       {error && (
//         <div className="text-red-500 text-center py-4">{error}</div>
//       )}

//       {/* Blog List */}
//       <div className="space-y-4">
//         {blogs.map((blog) => (
//           <div
//             key={blog._id} // Changed from id to _id
//             className="p-4 rounded-lg bg-white/5 border border-white/10"
//           >
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
//                 <p className="text-gray-300 mt-2">{blog.description}</p>
//                 <span className="text-sm text-gray-400 mt-1">{blog.option}</span>
//               </div>
//               <div className="space-x-2">
//                 <button
//                   onClick={() => {
//                     setSelectedBlog(blog);
//                     setTitle(blog.title);
//                     setDescription(blog.description);
//                     setOption(blog.option);
//                     setShowUpdateModal(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => {
//                     setSelectedBlog(blog);
//                     setShowDeleteModal(true);
//                   }}
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Modal */}
//       <Modal
//         show={showAddModal}
//         onClose={() => setShowAddModal(false)}
//         title="Add New Blog"
//       >
//         <BlogForm />
//       </Modal>

//       {/* Update Modal */}
//       <Modal
//         show={showUpdateModal}
//         onClose={() => setShowUpdateModal(false)}
//         title="Update Blog"
//       >
//         <BlogForm isUpdate={true} />
//       </Modal>

//       {/* Delete Confirmation Modal */}
//       <Modal
//         show={showDeleteModal}
//         onClose={() => setShowDeleteModal(false)}
//         title="Confirm Delete"
//       >
//         <div className="space-y-4">
//           <p className="text-gray-700">
//             Are you sure you want to delete this blog post?
//           </p>
//           <div className="flex justify-end space-x-2">
//             <button
//               onClick={() => setShowDeleteModal(false)}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleDelete}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Blog;













































































































































import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");
  const [image, setImage] = useState(null);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://88.222.213.80:5000/api/v1/blog/getblog");
      // Extract the blogs array from the response.data.data
      const blogsData = response.data.data || [];
      setBlogs(blogsData);
      setError(null);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle form submission for create/update
  const handleSubmit = async (isUpdate = false) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("option", option);
      if (image) {
        formData.append("image", image);
      }

      if (isUpdate && selectedBlog) {
        await axios.put(
          `http://88.222.213.80:5000/api/v1/blog/updateblog/${selectedBlog._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setShowUpdateModal(false);
      } else {
        await axios.post(
          "http://88.222.213.80:5000/api/v1/blog/createblog",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setShowAddModal(false);
      }

      // Reset form and refresh blogs
      setTitle("");
      setDescription("");
      setOption("");
      setImage(null);
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog post:", error);
      alert("Failed to save blog post");
    }
  };

  // Handle delete
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://88.222.213.80:5000/api/v1/blog/deleteblog/${selectedBlog._id}`
      );
      setShowDeleteModal(false);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  // Modal Component
  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-48 z-50">
        <div className="bg-white rounded-lg w-full max-w-md">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };

  // Form Component
  const BlogForm = ({ isUpdate = false }) => (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300"
      />
      <select
        value={option}
        onChange={(e) => setOption(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300"
      >
        <option value="">Select an option</option>
        <option value="Educational Content">Educational Content</option>
        <option value="Regular Update">Regular Update</option>
        <option value="SEO Benefits">SEO Benefits</option>
      </select>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full p-2"
      />
      <button
        onClick={() => handleSubmit(isUpdate)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        {isUpdate ? "Update" : "Submit"}
      </button>
    </div>
  );

  return (
    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Blogs</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Blog
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-white text-center py-4">Loading blogs...</div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-red-500 text-center py-4">{error}</div>
      )}

      {/* Blog List */}
      <div className="space-y-4">
        {Array.isArray(blogs) && blogs.map((blog) => (
          <div
            key={blog._id}
            className="p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
                <p className="text-gray-300 mt-2">{blog.description}</p>
                <span className="text-sm text-gray-400 mt-1">{blog.option}</span>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => {
                    setSelectedBlog(blog);
                    setTitle(blog.title);
                    setDescription(blog.description);
                    setOption(blog.option);
                    setShowUpdateModal(true);
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setSelectedBlog(blog);
                    setShowDeleteModal(true);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      <Modal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Blog"
      >
        <BlogForm />
      </Modal>

      {/* Update Modal */}
      <Modal
        show={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        title="Update Blog"
      >
        <BlogForm isUpdate={true} />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Confirm Delete"
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Are you sure you want to delete this blog post?
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
    </div>
  );
};

export default Blog;