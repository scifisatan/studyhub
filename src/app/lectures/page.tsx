'use client'

import { useState } from 'react'
import MarkdownRenderer from '@/components/markdown-renderer'
import VoiceRecorder from '@/components/voicerecorder'
export default function LecturesPage() {
    const [recording, setRecording] = useState(false)
    const [markdownContent, setMarkdownContent] = useState('Your notes will appear here')


    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <VoiceRecorder setMarkdownContent={setMarkdownContent} />
                <MarkdownRenderer content={markdownContent} />
            </div>
        </div>
    )
}