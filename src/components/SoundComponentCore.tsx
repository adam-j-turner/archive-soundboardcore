import * as React from 'react'
import ClipQueue from "../sound/ClipQueue"
import IClipMeta from '../sound/ClipMeta'


interface ISoundComponentProps {
    options?: IClipMeta[]
    fromList?: string
}

interface ISoundComponentState {
    selectedClipPaths: string[],
    currentQueue: ClipQueue | null,
    currentQueueDurationPct: number
}

class SoundComponentCore extends React.Component<ISoundComponentProps, ISoundComponentState> {
    state: ISoundComponentState = {
        selectedClipPaths: [],
        currentQueue: null,
        currentQueueDurationPct: 0
    }

    constructor(props: ISoundComponentProps) {
        super(props)

        if (this.props.fromList) {
            // fetch meta and fill in the gaps
        }
    }


    // calcProgressPct(clip: HTMLAudioElement) {
    //     return (clip.currentTime * 100) / clip.duration
    // }

    // setProgress() {
    //     if (!ClipProvider.isPlaying) {
    //         this.setState({
    //             progress: 0
    //         })
    //     } else {
    //         this.setState({
    //             progress: ClipProvider.currentClip ? this.calcProgressPct(ClipProvider.currentClip) : 0
    //         })
    //     }
    // }
}

export default SoundComponentCore;
