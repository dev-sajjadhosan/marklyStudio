// components/ChatSection.tsx
import botAvatar from '../../assets/ai.webp' // reuse your AI image
import useChats from '../../hooks/useChats'
import { Bubble } from './Babble'

const ChatSection = () => {
  const { chats, loading, sendMessage, setChats } = useChats()

//   // Auto‑scroll to the newest message
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: 'smooth' })
//   }, [chats, loading])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!(e.target as HTMLFormElement).ques?.value.trim()) return

    const chat = {
      question: (e.target as HTMLFormElement).ques?.value,
      userID: 'user1', // Replace with actual user ID if available
      userImage: botAvatar, // Replace with actual user image if available
      userCreateTime: new Date().toLocaleTimeString(),
      userCreateDate: new Date().toLocaleDateString(),
    }
    setChats((p) => [...p, chat])
    sendMessage(chat)
    ;(e.target as HTMLFormElement).ques.value = ''
    console.log(chats)
  }

  return (
    <div className="w-full bg-base-200 rounded-lg p-5 max-w-xl">
      {/* 🗨️ Chat history */}
      <div className="flex flex-col gap-3 h-[350px] overflow-y-auto pr-1">
        {chats.map((c, i) =>
          c.question ? (
            <Bubble
              key={i}
              side="start"
              text={c.question}
              avatar={c.userImage}
              type="question"
            />
          ) : (
            <Bubble
              key={i}
              side="end"
              text={c.answer}
              avatar={botAvatar}
              type="answer"
            />
          ),
        )}

        {/* Loading skeleton while waiting for the bot */}
        {loading && (
          <div className="chat chat-end opacity-70 animate-pulse">
            <div className="chat-bubble bg-base-300 w-24 h-4" />
          </div>
        )}
      </div>

      {/* ➡️ Input */}
      <form onSubmit={handleSubmit} className="join w-full mt-4 gap-1.5">
        <input
          type="text"
          //   value={input}
          name="ques"
          className="input join-item flex-1"
          placeholder="Chat with Markly…"
        />
        <button className="btn btn-info btn-soft join-item px-6" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatSection
