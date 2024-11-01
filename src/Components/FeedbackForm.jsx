import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  // Initialize values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '' //I need to figure out why the radio button does not clear when I submit
  });

  // Handle display of input in the screen for the values
  const handleChange = (event) => {
    // this extracts the name attribute of the input field and the value that was entered in the input field
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}
    `;

    const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);

    if(isConfirmed) {
      console.log('Submitting Feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Thank you for your valuable feedback!');

    } 
  }; //This is originally from the handleSubmit variable

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type='text'
          name='name'
          placeholder='Your name'
          value={formData.name}
          onChange={handleChange}
          />
          <input
          type='email'
          name='email'
          placeholder='Your email'
          value={formData.email}
          onChange={handleChange}
          />
          <textarea name="feedback" 
          placeholder="Your feedback"
          value={formData.feedback}
          onChange={handleChange}
          ></textarea>
          <div style={{display: 'flex', gap: '15px', flexDirection: 'row'}}>
          <span>Rate us:</span>
          <p><input
          type='radio'
          name='rating'
          value='1'
          onChange={handleChange}
          />1</p>
          <p><input
          type='radio'
          name='rating'
          value='2'
          onChange={handleChange}
          />2</p>
          <p><input
          type='radio'
          name='rating'
          value='3'
          onChange={handleChange}
          />3</p>
          <p><input
          type='radio'
          name='rating'
          value='4'
          onChange={handleChange}
          />4</p>
          <p><input
          type='radio'
          name='rating'
          value='5'
          onChange={handleChange}
          />5</p>
          </div>
          
          <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
