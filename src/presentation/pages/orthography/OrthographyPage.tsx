import { GTPMessage, HummanMessage, TextMessageBox, TypingLoader } from "../../components";

export function OrthographyPage() {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          <GTPMessage text="Hola, puedes escribir tu text en español y yo te ayudo con la ortografía." />
          <HummanMessage text="Hola Mundo" />

          <TypingLoader className="fade-in" />
        </div>
      </div>

      <TextMessageBox
        onSendMessage={(message) => console.log(message)}
      />
    </div>
  )
}
