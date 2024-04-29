import React, { useState } from 'react';

const Review = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic to submit the review to the backend
        console.log('Review submitted:', { rating, comment });
        // Reset form fields
        setRating(0);
        setComment('');
        setSubmitted(true);
    };

    return (
        <div>
            <h2>Write a Review</h2>
            {submitted ? (
                <p>Thank you for your review!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Rating:</label>
                        <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                            <option value={0}>Select Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div>
                        <label>Comment:</label>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
            )}
        </div>
    );
};

export default Review;