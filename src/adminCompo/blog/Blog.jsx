
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

  // Helper function to truncate text to 14 words
  const truncateDescription = (text) => {
    const words = text.split(' ');
    if (words.length > 14) {
      return words.slice(0, 14).join(' ') + '...';
    }
    return text;
  };

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://gntindia.com:5000/api/v1/blog/getblog");
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
          `https://gntindia.com:5000/api/v1/blog/updateblog/${selectedBlog._id}`,
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
          "https://gntindia.com:5000/api/v1/blog/createblog",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setShowAddModal(false);
      }

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
  console.log(selectedBlog);
  
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://gntindia.com:5000/api/v1/blog/deleteblog/${selectedBlog.id}`
      );
      setShowDeleteModal(false);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

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

      {loading && (
        <div className="text-white text-center py-4">Loading blogs...</div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4">{error}</div>
      )}

      <div className="space-y-4">
        {Array.isArray(blogs) && blogs.map((blog) => (
          <div
            key={blog._id}
            className="p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 mr-4">
                <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
                <p className="text-gray-300 mt-2">
                  {truncateDescription(blog.description)}
                </p>
                <span className="text-sm text-gray-400 mt-1 block">{blog.option}</span>
              </div>
              <div className="space-x-2 flex-shrink-0">
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

      <Modal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Blog"
      >
        <BlogForm />
      </Modal>

      <Modal
        show={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        title="Update Blog"
      >
        <BlogForm isUpdate={true} />
      </Modal>

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
