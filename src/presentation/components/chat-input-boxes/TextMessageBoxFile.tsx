import { FormEvent, useRef, useState } from 'react';

interface Props {
  onSendMessage: (message: string) => void
  placeholder?: string;
  disableCorrections?: boolean;
  accept?: string;
}

export function TextMessageBoxFile({ onSendMessage, placeholder, disableCorrections = false, accept }: Props) {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null)

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (message.trim().length === 0) return;

    onSendMessage(message);
    setMessage('')
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className='mr-3'>
        <button
          type='button'
          className='flex items-center justify-center text-gray-400 hover:text-gray-600'
          onClick={() => inputFileRef.current?.click()}
        >
          <i className='fa-solid fa-paperclip text-xl'></i>
        </button>
        <input
          type="file"
          ref={inputFileRef}
          hidden
          accept={accept}
          onChange={event => setFile(event.target.files?.item(0) ?? null)}
        />
      </div>
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            placeholder={placeholder}
            autoComplete={disableCorrections ? 'off' : 'on'}
            autoCorrect={disableCorrections ? 'off' : 'on'}
            spellCheck={disableCorrections ? 'false' : 'true'}
            value={message}
            onChange={event => setMessage(event.target.value)}
            className="flex w-full text-gray-800 border roundexl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
        </div>
      </div>

      <div className="ml-4">
        <button
          className="btn-primary"
          disabled={!file}
        >
          {!file
            ? (<span className="mr-2">Send</span>)
            : (<span className="mr-2">{file.name.substring(0, 10) + '...'}</span>)
          }

          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}
