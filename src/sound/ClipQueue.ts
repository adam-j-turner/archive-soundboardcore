interface IClip {
    path: string
    audio: HTMLAudioElement
}

class ClipQueue {
    queue: IClip[]
    isPlaying: boolean
    onQueueEnd: Function | undefined

    constructor(clips: IClip[], onQueueEnd?: Function) {
        this.isPlaying = false
        this.queue = clips
        this.onQueueEnd = onQueueEnd

        this.queue.forEach((clip) => {
            clip.audio.addEventListener('ended', () => { this.onAudioEnd() })
        })
    }

    get currentClip() {
        return this.queue.length > 0 ? this.queue[0] : null
    }

    onAudioEnd() {
        this.queue.shift()
    
        // play the next item in the queue
        if (this.queue.length > 0) {
            this.queue[0].audio.play()
        } else {
            this.isPlaying = false
            if (this.onQueueEnd) { this.onQueueEnd() }
        }
    }

    play() {
        this.isPlaying = true
        this.queue[0].audio.play()
    }

    stop() {
        this.queue[0].audio.pause()
        this.queue[0].audio.currentTime = 0
        this.isPlaying = false

        if (this.onQueueEnd) { this.onQueueEnd() }
    }

}

export default ClipQueue
