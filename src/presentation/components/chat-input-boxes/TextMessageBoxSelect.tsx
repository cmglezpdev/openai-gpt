import { FormEvent, useState } from 'react';

interface Props {
  onSendMessage: (message: string) => void
  placeholder?: string;
  disableCorrections?: boolean;
  options: Option[];
}

interface Option {
  label: string;
  value: string;
}

export function TextMessageBoxSelect({ onSendMessage, placeholder, disableCorrections = false, options }: Props) {
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');

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
      <div className="flex-grow">
        <div className="flex">
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
            className="w-full text-gray-800 border roundexl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />

          <select
            name="select"
            className='w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'
            value={selectedOption}
            onChange={event => setSelectedOption(event.target.value)}
          >
            <option value="">Select</option>
            {options.map(o => (
              <option key={o.label} value={o.label}>{o.value}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Send</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}
