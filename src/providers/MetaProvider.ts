import IClipMeta from "../sound/ClipMeta"

class MetaProvider {
  clips: IClipLibrary
  queues: ClipQueue[]


  constructor() {
    this.clips = this.importClips(require.context('../clips', true, /\.(wav|mp3)$/))
    this.queues = []
  }

  importClips(context: __WebpackModuleApi.RequireContext) {
    let clips: IClipLibrary = {}

    context.keys().forEach((item: string) => {
      clips[item.replace('./', '')] = new Audio(context(item))
    })

    for (const key in clips) {
      let clip = clips[key]

      clip.preload = 'auto'
      clip.load()
    }

    return clips
  }

  playAudio(paths: string[], allowSimultaneous=false) {
    if (!allowSimultaneous) { this.stopAudio() }

    let clips = paths.map((path) => {
      return { path: path, audio: this.clips[path] }
    })

    let queue = new ClipQueue(clips, () => {
      // remove the queue when it's done
      this.queues.splice(this.queues.indexOf(queue), 1)
    })

    this.queues.push(queue)
    queue.play()
  }

  stopAudio() {
    this.queues.forEach((queue) => {
      queue.stop()
    })
  }
}

const ClipProviderInstance = new ClipProvider();

export default ClipProviderInstance;
