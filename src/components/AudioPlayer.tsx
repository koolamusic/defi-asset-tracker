import { useState, useEffect } from 'react'

// interface PlayerProps {
//   url: string
// }

export const useAudio = (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>(null as unknown as HTMLAudioElement)
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    if (typeof window !== undefined) {
      setAudio(new Audio(url))
      playing ? audio.play() : audio.pause()
    }
  }, [playing])

  //   useEffect(() => {
  //     //   if (typeof window !== undefined) {
  //     // audio.addEventListener('ended', () => setPlaying(false))
  //     //   }
  //     return () => {
  //       audio.removeEventListener('ended', () => setPlaying(false))
  //     }
  //   }, [])

  return [playing, toggle]
}

// const Player = ({ url }: PlayerProps) => {
//   const [playing, toggle] = useAudio(url)

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
//     </div>
//   )
// }

// export default Player
