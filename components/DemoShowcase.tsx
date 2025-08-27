import React, { useState } from 'react';

// This is a demo component to showcase different examples
// In a real implementation, you would import the actual AIDropDown component
const DemoAIDropDown = ({ 
  text, 
  aiResponseCallback, 
  size = '48px',
  buttonStyle = {},
  dropdownStyle = {},
  optionStyle = {},
  optionHoverStyle = {},
  promptOptions = []
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const defaultPrompts = [
    { prompt: 'Fix grammar', label: 'Fix Grammar' },
    { prompt: 'Make it professional', label: 'Professional' },
    { prompt: 'Make it casual', label: 'Casual' },
    { prompt: 'Make it shorter', label: 'Shorter' },
    { prompt: 'Make it longer', label: 'Longer' }
  ];
  
  const prompts = promptOptions.length > 0 ? promptOptions : defaultPrompts;
  
  const handleOptionClick = (prompt: string) => {
    // Simulate AI response
    const responses = {
      'Fix grammar': 'This is a grammatically correct sentence.',
      'Make it professional': 'This is a professionally written statement.',
      'Make it casual': 'This is a casual, friendly message.',
      'Make it shorter': 'Short and sweet.',
      'Make it longer': 'This is a more detailed and comprehensive explanation that provides additional context and information.'
    };
    
    setTimeout(() => {
      aiResponseCallback(responses[prompt] || 'AI response received!');
      setIsOpen(false);
    }, 1000);
  };
  
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          ...buttonStyle
        }}
        disabled={!text}
      >
        🤖
      </button>
      
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '8px',
            background: '#ffffff',
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            minWidth: '200px',
            ...dropdownStyle
          }}
        >
          {prompts.map((option: any, index: number) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option.prompt)}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                borderBottom: index < prompts.length - 1 ? '1px solid #f0f0f0' : 'none',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                ...optionStyle
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = optionHoverStyle.background || '#f8f9fa';
                e.currentTarget.style.color = optionHoverStyle.color || '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = optionStyle.background || 'transparent';
                e.currentTarget.style.color = optionStyle.color || 'inherit';
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DemoAIDropDown;
