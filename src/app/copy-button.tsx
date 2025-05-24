"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface CopyButtonProps {
  text: string;
  label?: string; // Например: "HTML", "CSS"
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка при копировании:', err);
    }
  };

  return (
    <div className="copy-container" style={{ display: 'flex', cursor: 'pointer' }}>
      
      <button onClick={handleCopy} className={`copy-button ${copied ? 'copied' : ''}`}>
        {copied
          ? <Image width={16} height={16} src="/icons8-галочка-50.png" alt="Скопировано" className='icon' />
          : <Image width={16} height={16} src="/icons8-скопировать-48.png" alt="Скопировать" className='icon' />
        }
      </button>
    </div>
  );
};

export default CopyButton;
