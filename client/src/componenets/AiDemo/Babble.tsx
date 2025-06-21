// components/Bubble.tsx
interface BubbleProps {
  side: 'start' | 'end'
  text: string | undefined
  avatar: string | undefined
  type: 'question' | 'answer'
}

export const Bubble = ({ side, text, avatar, type }: BubbleProps) => (
  <div className={`chat chat-${side}`}>
    <div className="chat-image avatar">
      <div className="w-8 rounded-full">
        <img src={avatar} />
      </div>
    </div>
    {type === 'question' ? (
      <div className="chat-bubble text-sm text-gray-400">{text}</div>
    ) : (
      <div className="chat-bubble text-sm text-accent">{text}</div>
    )}
  </div>
)
