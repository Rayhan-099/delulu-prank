import { useEffect } from 'react';
import { Howl, Howler } from 'howler';
import { useStore } from '../../store/appState';

// In a real app we would point these to actual asset paths.
// For now, we stub them to not crash. 
// We will trigger them based on phases and actions.

const sounds = {
    // Wholesome BGMs
    piano_bgm: new Howl({ src: ['/assets/audio/romanceeeeeeeeeeeeee.mp3'], loop: true, volume: 0.5 }),
    night_ambience: new Howl({ src: ['/assets/audio/romanceeeeeeeeeeeeee.mp3'], loop: true, volume: 0.5 }),

    // Interactions
    paper_rustle: new Howl({ src: ['/assets/audio/what-a-good-boy.mp3'] }),
    soft_page_turn: new Howl({ src: ['/assets/audio/rizz-sound-effect.mp3'] }),
    sparkle_chime: new Howl({ src: ['/assets/audio/rizz-sound-effect.mp3'] }),

    // Switch & Meme Drop
    record_scratch: new Howl({ src: ['/assets/audio/ack.mp3'], volume: 1.0 }),
    vine_boom: new Howl({ src: ['/assets/audio/vine-boom.mp3'], volume: 1.0 }),
    discord_ping: new Howl({ src: ['/assets/audio/metal-pipe-clang.mp3'], volume: 1.0 }), // Using metal pipe for the impact
    error_fahhh: new Howl({ src: ['/assets/audio/fahhhhhhhhhhhhhh.mp3'], volume: 1.0 }),
    chicken_scream: new Howl({ src: ['/assets/audio/chicken-on-tree-screaming.mp3'], volume: 1.0 }),
    tuco_get_out: new Howl({ src: ['/assets/audio/tuco-get-out.mp3'], volume: 1.0 }),
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
