import { useState } from "react";
import { GTPMessage, HummanMessage, TextMessageBox, TypingLoader } from "../components";

interface Message {
  text: string;
  isGPT: boolean;
}

export function ChatTemplate() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessage = async (text: string) => {
    setIsLoading(true);
    setMessages(prev => [...prev, {
      text, isGPT: false
    }])

    setTimeout(() => {
      setIsLoading(false)
      setMessages(prev => [...prev, {
        text: 'Hola, ¿cómo estás?', isGPT: true
      }])
    }, 1500)
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GTPMessage text="Hola, puedes escribir tu text en español y yo te ayudo con la ortografía." />
          {messages.map((message, index) => (
            message.isGPT ? (
              <GTPMessage key={index} text={message.text} />
            ) : (
              <HummanMessage key={index} text={message.text} />
            )
          ))}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={(message) => handleMessage(message)}
      />
    </div>
  )
}
