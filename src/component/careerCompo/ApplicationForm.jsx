import { useState } from 'react';

export default function ApplicationForm({ job, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          required
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn Profile
        </label>
        <input
          type="url"
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.linkedin}
          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Years of Relevant Experience *
        </label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Portfolio/GitHub
        </label>
        <input
          type="url"
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.portfolio}
          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cover Letter
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-lg h-32"
          value={formData.coverLetter}
          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Resume/CV *
        </label>
        <input
          type="file"
          required
          accept=".pdf,.doc,.docx"
          className="w-full"
          onChange={(e) => setFormData({ ...formData, resume: e.target.files ? e.target.files[0] : null })}
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onSubmit}
          className="px-6 py-2 border rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
