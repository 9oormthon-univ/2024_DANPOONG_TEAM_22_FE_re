
export type RCDBtnBarProps = {
    record: () => void
    // pause: () => void
    play: () => void
    upload: () => void
    isPlaying: boolean
    // isPaused: boolean
    isDone: boolean
    recording: boolean
    reflesh : ()=>void
    stop: ()=>void
  }