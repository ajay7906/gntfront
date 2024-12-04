import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [currentStep, setCurrentStep] = useState('initial');

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { type: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // Handle different conversation steps
    setTimeout(() => {
      if (currentStep === 'initial') {
        if (userInput.toLowerCase().includes('hi') || userInput.toLowerCase().includes('hello')) {
          setMessages([...newMessages, {
            type: 'bot',
            content: 'Hello! Please share your name with me.'
          }]);
          setCurrentStep('name');
        }
      } else if (currentStep === 'name') {
        setUserInfo({ ...userInfo, name: userInput });
        setMessages([...newMessages, {
          type: 'bot',
          content: 'Great! Now, please provide your email address.'
        }]);
        setCurrentStep('email');
      } else if (currentStep === 'email') {
        setUserInfo({ ...userInfo, email: userInput });
        setMessages([...newMessages, {
          type: 'bot',
          content: 'Excellent! Finally, please share your mobile number.'
        }]);
        setCurrentStep('mobile');
      } else if (currentStep === 'mobile') {
        setUserInfo({ ...userInfo, mobile: userInput });
        setMessages([...newMessages, {
          type: 'bot',
          content: `Thank you for providing your information! We'll get back to you soon.`
        }]);
        setCurrentStep('complete');
      }
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 h-96 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-gray-500 text-center mt-4">
                Send 'Hi' or 'Hello' to start the conversation!
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-4 flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;