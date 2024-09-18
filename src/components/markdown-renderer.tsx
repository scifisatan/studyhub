'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className=" max-w-none border border-gray-300 p-4 rounded ">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  )
}