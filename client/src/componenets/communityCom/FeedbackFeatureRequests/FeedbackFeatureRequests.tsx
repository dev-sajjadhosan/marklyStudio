import React, { useState } from 'react'

type Feedback = {
  id: string
  text: string
  author: string
}

const dummyFeedbacks: Feedback[] = [
  { id: 'f1', text: 'Please add dark mode toggle', author: 'user99' },
]

const FeedbackFeatureRequests: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState(dummyFeedbacks)
  const [newFeedback, setNewFeedback] = useState('')

  const submitFeedback = () => {
    if (!newFeedback.trim()) return
    setFeedbacks([
      { id: `f${Date.now()}`, text: newFeedback, author: 'Anonymous' },
      ...feedbacks,
    ])
    setNewFeedback('')
  }

  return (
    <section className="p-5 mt-15">
      <h2 className="text-3xl">Feedback & Feature Requests</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="card border border-base-300 p-7 shadow">
            <p className="text-xl">{fb.text}</p>
            <small className="text-gray-400">— {fb.author}</small>
          </div>
        ))}
      </div>

      <textarea
        placeholder="Your feedback or feature request"
        value={newFeedback}
        onChange={(e) => setNewFeedback(e.target.value)}
        style={{ width: '100%', marginTop: 10, marginBottom: 8 }}
      />
      <button onClick={submitFeedback}>Submit</button>
    </section>
  )
}

export default FeedbackFeatureRequests
