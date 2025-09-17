import React from 'react'

export default function ChatBot() {
    return (
        <div className="fixed bottom-6 right-6 z-20">
            <button className="bg-black hover:bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <div className="text-center flex justify-center">
                    <div className="w-3 h-3 mx-auto mb-1">📞</div>
                    <span className="text-xs">Contact Us</span>
                </div>
            </button>
        </div>
    )
}
