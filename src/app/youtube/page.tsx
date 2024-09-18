'use client'

import { useState } from 'react'
import MarkdownRenderer from '@/components/markdown-renderer'

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full"
      />
    </div>
  )
}

export default function YoutubePage() {
  const [youtubeLink, setYoutubeLink] = useState('')
  const [videoId, setVideoId] = useState('')
  const [markdownContent, setMarkdownContent] = useState('Your notes will appear here.')

  const extractVideoId = (url: string) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const extractedVideoId = extractVideoId(youtubeLink)
    if (extractedVideoId) {
      setVideoId(extractedVideoId)
      setMarkdownContent(`like share and subscribe guys`)
    } else {
      alert('Invalid YouTube URL')
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          placeholder="Enter YouTube link"
          className="flex-grow px-4 py-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Enter
        </button>
      </form>
      {videoId && (
        <div className="mt-4 max-w-md mx-auto py-4">
          <YouTubeEmbed videoId={videoId} />
        </div>
      )}
      <MarkdownRenderer content={markdownContent} />
    </div>
  )
}