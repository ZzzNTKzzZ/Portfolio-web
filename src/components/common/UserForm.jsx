import { useState } from 'react';
import styles from '../../styles/UserForm.module.css';

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    avatar: '',
    description: '',
    location: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(formData); // ✅ this must be a function
    } else {
      console.warn("onSubmit is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.userForm}>
      <label>
        Full Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Job Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>

      <label>
        Avatar URL:
        <input type="text" name="avatar" value={formData.avatar} onChange={handleChange} />
      </label>

      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>

      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>

      <button type="submit" className={styles.submitButton}>
        Save Info
      </button>
    </form>
  );
}

export default UserForm;
