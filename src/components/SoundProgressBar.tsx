import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {default as ClipProvider} from '../providers/ClipProvider';
import { Stack } from '@mui/system';


// type ProgressState = {
//   progress: number;
// };

// class SoundProgressBar extends React.Component {
//   state: ProgressState = {
//     progress: 20,
//   };

//   calcProgressPct(clip: HTMLAudioElement) {
//     return (clip.currentTime * 100) / clip.duration
//   }

//   setProgress() {
//     if (!ClipProvider.isPlaying) {
//       this.setState({
//         progress: 0
//       })
//     } else {
//       this.setState({
//         progress: ClipProvider.currentClip ? this.calcProgressPct(ClipProvider.currentClip) : 0
//       })
//     }
//   }

//   render() {
//     const { progress } = this.state;
//     setInterval(() => {this.setProgress()}, 100);

//     return (
//       <Stack>
//         <Box>
//           <p>{ClipProvider.queues.length().toString()}</p>
//           <p>{progress}</p>
//         </Box>
//         <LinearProgress variant="determinate" value={progress} />
//       </Stack>
//     );
//   }
// }

// export default SoundProgressBar;
