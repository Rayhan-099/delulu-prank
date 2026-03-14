import { useEffect } from 'react';
import { Howl, Howler } from 'howler';
import { useStore } from '../../store/appState';

// Import all audio assets to ensure they are tracked and bundled by Vite for Vercel deployment
import romanceAudio from '../../assets/audio/romanceeeeeeeeeeeeee.mp3';
import goodBoyAudio from '../../assets/audio/what-a-good-boy.mp3';
import rizzAudio from '../../assets/audio/rizz-sound-effect.mp3';
import ackAudio from '../../assets/audio/ack.mp3';
import vineBoomAudio from '../../assets/audio/vine-boom.mp3';
import metalPipeAudio from '../../assets/audio/metal-pipe-clang.mp3';
import fahAudio from '../../assets/audio/fahhhhhhhhhhhhhh.mp3';
import chickenAudio from '../../assets/audio/chicken-on-tree-screaming.mp3';
import tucoAudio from '../../assets/audio/tuco-get-out.mp3';

const sounds = {
    // Wholesome BGMs
    piano_bgm: new Howl({ src: [romanceAudio], loop: true, volume: 0.5 }),
    night_ambience: new Howl({ src: [romanceAudio], loop: true, volume: 0.5 }),

    // Interactions
    paper_rustle: new Howl({ src: [goodBoyAudio] }),
    soft_page_turn: new Howl({ src: [rizzAudio] }),
    sparkle_chime: new Howl({ src: [rizzAudio] }),

    // Switch & Meme Drop
    record_scratch: new Howl({ src: [ackAudio], volume: 1.0 }),
    vine_boom: new Howl({ src: [vineBoomAudio], volume: 1.0 }),
    discord_ping: new Howl({ src: [metalPipeAudio], volume: 1.0 }), // Using metal pipe for the impact
    error_fahhh: new Howl({ src: [fahAudio], volume: 1.0 }),
    chicken_scream: new Howl({ src: [chickenAudio], volume: 1.0 }),
    tuco_get_out: new Howl({ src: [tucoAudio], volume: 1.0 }),
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
