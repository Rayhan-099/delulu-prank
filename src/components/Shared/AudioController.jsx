import { useEffect } from 'react';
import { Howl, Howler } from 'howler';
import { useStore } from '../../store/appState';

// In a real app we would point these to actual asset paths.
// For now, we stub them to not crash. 
// We will trigger them based on phases and actions.

const sounds = {
    piano_bgm: new Howl({ src: ['/assets/audio/piano_bgm.mp3'], loop: true, volume: 0.5 }),
    paper_rustle: new Howl({ src: ['/assets/audio/paper_rustle.mp3'] }),
    soft_page_turn: new Howl({ src: ['/assets/audio/soft_page_turn.mp3'] }),
    night_ambience: new Howl({ src: ['/assets/audio/night_ambience.mp3'], loop: true, volume: 0.5 }),
    sparkle_chime: new Howl({ src: ['/assets/audio/sparkle_chime.mp3'] }),
    record_scratch: new Howl({ src: ['/assets/audio/record_scratch.mp3'], volume: 1.0 }),
    vine_boom: new Howl({ src: ['/assets/audio/vine_boom.mp3'], volume: 1.0 }),
    discord_ping: new Howl({ src: ['/assets/audio/discord_ping.mp3'], volume: 1.0 }),
    error_fahhh: new Howl({ src: ['/assets/audio/error_fahhh.mp3'], volume: 1.0 }),
};

export const playSound = (soundName) => {
    if (sounds[soundName]) {
        sounds[soundName].play();
    }
};

export const stopSound = (soundName) => {
    if (sounds[soundName]) {
        sounds[soundName].stop();
    }
};

export const stopAllSounds = () => {
    Howler.stop();
};

export default function AudioController() {
    const phase = useStore((state) => state.phase);
    const isAudioUnlocked = useStore((state) => state.isAudioUnlocked);

    useEffect(() => {
        if (!isAudioUnlocked) return;

        if (phase === 'landing') {
            // Audio unlocks on the very first click, so we start piano when it unlocks
            playSound('piano_bgm');
        }
    }, [isAudioUnlocked, phase]);

    return null; // This component handles side effects only
}
