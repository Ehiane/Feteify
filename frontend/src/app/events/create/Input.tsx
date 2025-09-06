'use client';

import React from 'react';

// Define the props the component will accept
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Input({label, ...props}: InputProps) {
    return (
        <div>
            <label htmlFor='{props.id}' className="block text-sm font-medium text-gray-300 mb-1">
                {label}
            </label>
            <input
                {...props}
                className='w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500'
            />
        </div>
    )
}