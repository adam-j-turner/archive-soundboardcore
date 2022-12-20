import React from 'react';
import logo from './logo.svg';
import { Button, Paper } from '@mui/material';
import './App.css';
import { Box, Stack } from '@mui/system';
import { Container } from '@mui/material';
import {default as ClipProvider} from './providers/ClipProvider';
// import SoundProgressBar from './components/SoundProgressBar';
import SoundComponentCore from './components/SoundComponentCore';

function App() {
  return (
    <div className="fullPageContainer">
      <Stack spacing={5} className="contentStack">
        <Container maxWidth={false} className="displayBox">
          <Button onClick={onButtonClickHonk}>Something</Button>
          <Button onClick={onButtonClickThank}>Something</Button>
        </Container>
        <Container maxWidth={false} className="headerBox">
          {/* <SoundProgressBar></SoundProgressBar> */}
        </Container>
        <SoundComponentCore></SoundComponentCore>
      </Stack>
    </div>
  );
}

function onButtonClickHonk(event: React.MouseEvent<HTMLElement>) {
  ClipProvider.playAudio(['honk_full.mp3'], event.altKey)
}

function onButtonClickThank(event: React.MouseEvent<HTMLElement>) {
  ClipProvider.playAudio(['thanks_1.mp3'], event.altKey)
}

export default App;
