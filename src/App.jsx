import { useState } from 'react';
import './App.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { requestToGroqAI } from './utils/groq';

function App() {
  const [data, setData] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content);
    console.log({ ai });
    setData(ai); // update state dengan hasil dari AI
  };

  return (
    <main className="flex flex-col min-h-[90vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className="text-7xl text-indigo-500"> TRI | REACT</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-4 py-4"
      >
        <input
          placeholder="Ketik Disini bang"
          className="py-2 px-8 text-md rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        />
        <button
          type="submit"
          className="bg-indigo-500 py-2 px-8 font bold text-white rounded-md"
        >
          Kirim
        </button>
      </form>
      <div className="max-w-xl">
        <SyntaxHighlighter language="swift" style={darcula}>
          {data}
        </SyntaxHighlighter>
      </div>
    </main>
  );
}

export default App;
