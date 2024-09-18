'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Mic, Square, Play, Pause } from 'lucide-react'

type VoiceRecorderProps = {
    setMarkdownContent: (content: string) => void;
};

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ setMarkdownContent }) => {
    const [isRecording, setIsRecording] = useState(false)
    const [audioUrl, setAudioUrl] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)


    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            mediaRecorderRef.current = new MediaRecorder(stream)
            const chunks: Blob[] = []

            mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data)
            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' })
                setAudioUrl(URL.createObjectURL(blob))
            }

            mediaRecorderRef.current.start()
            setIsRecording(true)
        } catch (err) {
            console.error('Error accessing microphone:', err)
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
            setMarkdownContent('Kati ramro aawaj timro')
        }
    }

    const toggleRecording = () => {
        if (isRecording) {
            stopRecording()
        } else {
            startRecording()
        }
    }


    return (
        <div className="flex flex-col items-center space-y-4">
            <button
                onClick={toggleRecording}
                className={`p-4 rounded-full ${isRecording ? 'bg-red-500' : 'bg-blue-500'
                    } text-white hover:opacity-80 transition-opacity`}
            >
                {isRecording ? <Square size={24} /> : <Mic size={24} />}
            </button>
            {audioUrl && (
                <div className="flex items-center space-x-2">
                    <audio controls ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />
                </div>
            )}
        </div>
    )
}

export default VoiceRecorder