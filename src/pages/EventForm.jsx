
import React, { useState } from 'react';
const EventForm = ({ initialData, onSave, onCancel }) => {
  const [form, setForm] = useState({
    title: initialData?.title || '',
    date: initialData?.date || '',
    location: initialData?.location || '',
    time: initialData?.time || '',
    description: initialData?.description || '',
    image: initialData?.image || '',
    status: initialData?.status || 'Draft'
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      setForm(f => ({ ...f, image: URL.createObjectURL(files[0]) }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="modal-form event-modal-form" onSubmit={handleSubmit}>
      <h3 className="modal-title">Event Details</h3>
      <div className="modal-row">
        <div className="modal-field">
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Event title" />
        </div>
        <div className="modal-field">
          <label>Date</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} required />
        </div>
        <div className="modal-field">
          <label>Time</label>
          <input name="time" type="time" value={form.time} onChange={handleChange} required />
        </div>
        <div className="modal-field">
          <label>Location</label>
          <input name="location" value={form.location} onChange={handleChange} required placeholder="Event location" />
        </div>
      </div>
      <div className="modal-row">
        <div className="modal-field" style={{flex: 1}}>
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows={4} required placeholder="Event description..." style={{resize: 'vertical'}} />
        </div>
      </div>
      <div className="modal-row">
        <div className="modal-field">
          <label>Image</label>
          <input name="image" type="file" accept="image/*" onChange={handleChange} />
          {form.image && (
            <img src={form.image} alt="Event" className="modal-image-preview" />
          )}
        </div>
        <div className="modal-field">
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Draft">Draft</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="modal-actions">
        <button type="submit" className="add-btn">{initialData ? 'Save Changes' : 'Add Event'}</button>
        <button type="button" className="logout-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};
export default EventForm;
