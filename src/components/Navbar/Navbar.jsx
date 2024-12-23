import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar() {
  const textHover = `hover:text-[#0050FF]`;
  const bgHover = `hover:bg-[#EAEDF7]`;
  
  return (
    <div>
      <ul className='flex font-bold text-sm leading-6 mb-4'>
        <li className={`rounded-full pt-2 pr-4 pb-2 pl-4 gap-2 ${textHover} ${bgHover}`}>TOPページ</li>
        <li className={`rounded-full pt-2 pr-4 pb-2 pl-4 gap-2 ${textHover} ${bgHover}`}>アンケートを見る</li>
        <li className={`rounded-full pt-2 pr-4 pb-2 pl-4 gap-2 ${textHover} ${bgHover}`}>詳細検索</li>
      </ul>
    </div>
  );
}

