import React, { useState } from 'react';
const NewsForm = ({ initialData, onSave, onCancel }) => {
  const [form, setForm] = useState({
    title: initialData?.title || '',
    author: initialData?.author || '',
    date: initialData?.date || '',
    category: initialData?.category || 'Policy',
    status: initialData?.status || 'Draft',
    views: initialData?.views || 0,
    description: initialData?.description || ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <h3 style={{marginBottom: '18px', fontWeight: 700, fontSize: '1.2rem'}}>News Article Details</h3>
      <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
        <div style={{flex: 1, minWidth: '220px'}}>
          <label>Headline</label>
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Enter headline" />
        </div>
        <div style={{flex: 1, minWidth: '180px'}}>
          <label>Category</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="Policy">Policy</option>
            <option value="Youth">Youth</option>
            <option value="Event">Event</option>
            <option value="Announcement">Announcement</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={{flex: 1, minWidth: '140px'}}>
          <label>Date</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} required />
        </div>
        <div style={{flex: 1, minWidth: '140px'}}>
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>
      </div>
      <div style={{marginTop: '18px'}}>
        <label>Author</label>
        <input name="author" value={form.author} onChange={handleChange} required placeholder="Author name" />
      </div>
      <div style={{marginTop: '18px'}}>
        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} rows={5} required placeholder="Enter news content/description..." style={{resize: 'vertical'}} />
      </div>
      <div style={{marginTop: '18px'}}>
        <label>Views</label>
        <input name="views" type="number" value={form.views} onChange={handleChange} min="0" />
      </div>
      <div className="modal-actions">
        <button type="submit" className="add-btn">{initialData ? 'Save Changes' : 'Add News'}</button>
        <button type="button" className="logout-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};
export default NewsForm;
