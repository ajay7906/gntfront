



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














































import React, { useState } from "react";
import axios from "axios";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [option, setOption] = useState(""); // New state for the option field
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("option", option); // Append the selected option
      formData.append("image", image);

      console.log([...formData]); // Debug: Check FormData content

      await axios.post("http://localhost:5000/api/v1/blog/createblog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Reset form fields
      setTitle("");
      setDescription("");
      setOption(""); // Reset the option field
      setImage(null);
    } catch (error) {
      console.error("Error saving blog post:", error);
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-md bg-white/5 text-white"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded-md bg-white/5 text-white"
        ></textarea>

        {/* Dropdown for selecting the option */}
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="w-full p-2 rounded-md bg-white/5 text-black"
        >
          <option value="">Select an option</option> {/* Default placeholder */}
          <option value="Educational Content">Educational Content</option>
          <option value="Regular Update">Regular Update</option>
          <option value="SEO Benefits">SEO Benefits</option>
        </select>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 rounded-md bg-white/5 text-white"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Blog;
