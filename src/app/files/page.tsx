'use client'

import { useState } from 'react'
import MarkdownRenderer from '@/components/markdown-renderer'

export default function FilesPage() {
    const [markdownContent, setMarkdownContent] = useState('Your notes will appear here')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setMarkdownContent("Kati ramro notes wow")
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf"
                    className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
                />
            </div>
            <MarkdownRenderer content={markdownContent} />
        </div>
    )
}