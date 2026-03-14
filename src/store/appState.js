import { create } from 'zustand';

export const useStore = create((set) => ({
    phase: 'landing', // 'landing', 'envelope_open', 'jar_of_stars', 'loading', 'ragebait', 'aftermath'
    setPhase: (newPhase) => set({ phase: newPhase }),

    // Audio state
    isAudioUnlocked: false,
    unlockAudio: () => set({ isAudioUnlocked: true }),
}));
