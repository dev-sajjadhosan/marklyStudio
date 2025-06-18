import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { TbMessageShare, TbMessageX } from 'react-icons/tb'
import { enqueueSnackbar } from 'notistack'

const FeedbackModal = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // replace with your real ID
        import.meta.env.VITE_TEMPLATE_ID, // replace with your real ID
        formRef.current!,
        import.meta.env.VITE_PUBLIC_K, // replace with your public key
      )
      .then(
        (result) => {
          console.log('✅ Email sent:', result.text)
          //   alert('Feedback sent. Thanks!')
          enqueueSnackbar('Your Feedback Send Successfully. Thank You 🧑‍💻!', {
            variant: 'success',
          })
          formRef.current?.reset()
          // Close modal if you want
        },
        (error) => {
          console.log('❌ Email failed:', error.text)
          enqueueSnackbar('Something went wrong, try again.', {
            variant: 'error',
          })
        },
      )
  }

  return (
    <>
      <dialog className="modal" id="feedback_modal">
        <div className="modal-box max-w-2xl w-11/12 p-15">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-light">Feedback @me</h2>
            <form method="dialog">
              <button className="btn btn-sm btn-error btn-soft">
                <TbMessageX size={15} />
                Close
              </button>
            </form>
          </div>

          {/* 🔥 EmailJS form with ref */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-2.5 mt-5"
          >
            <input
              type="text"
              className="input w-full"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="input w-full"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="textarea w-full"
              placeholder="What do you want to say or suggest?"
              rows={5}
              name="user_details"
              required
            />
            <button
              type="submit"
              className="btn btn-sm btn-soft btn-info px-5 mt-2.5 self-center"
            >
              <TbMessageShare size={15} />
              Send Feedback
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default FeedbackModal
