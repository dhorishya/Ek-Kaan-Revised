import { useState } from 'react';
import { BsSend, BsPaperclip } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const { loading, sendMessage } = useSendMessage();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message && !file) return;

    await sendMessage(message, file);
    setMessage('');
    setFile(null);
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type='file'
          name='file'
          id='file'
          onChange={handleFileChange}
          className='hidden'
        />
        <label htmlFor='file' className='absolute inset-y-0 right-10 flex items-center pe-3 text-white cursor-pointer'>
          <BsPaperclip />
        </label>
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'
          disabled={loading}
        >
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
      {file && <div className='text-white mt-2'>{file.name}</div>}
    </form>
  );
};

export default MessageInput;
