/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private currentThinkingNode: OscillatorNode[] = [];
  private currentThinkingGain: GainNode | null = null;

  constructor() {
    // Lazy init
  }

  private initCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    if (!enabled) {
      this.stopThinkingHum();
    } else {
      this.initCtx();
    }
  }

  playKeypress(isSpace: boolean = false, isEnter: boolean = false) {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      const ctx = this.ctx!;
      
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      const now = ctx.currentTime;

      if (isEnter) {
        // Thick click + short lower resonance
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(70, now + 0.12);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);

        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.start(now);
        osc.stop(now + 0.16);
      } else if (isSpace) {
        // Lower key click with filter
        osc.type = 'triangle';
        // Space keys are longer and slightly hollower
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(400, now);
        filter.Q.setValueAtTime(1.5, now);

        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

        osc.start(now);
        osc.stop(now + 0.1);
      } else {
        // Regular click: high freq transient + random variations
        const randFreq = 650 + Math.random() * 400; // 650Hz to 1050Hz typical keys
        osc.type = 'sine';
        osc.frequency.setValueAtTime(randFreq, now);
        osc.frequency.exponentialRampToValueAtTime(randFreq * 0.5, now + 0.04);

        // Mix in a bit of white-noise equivalent or high resonance filter
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(randFreq * 1.5, now);
        filter.Q.setValueAtTime(3, now);

        gainNode.gain.setValueAtTime(0.18, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

        osc.start(now);
        osc.stop(now + 0.06);
      }
    } catch (e) {
      console.warn('Audio click failure', e);
    }
  }

  startThinkingHum() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      const ctx = this.ctx!;
      this.stopThinkingHum(); // Avoid multiples

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Deep sci-fi drones
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(85, ctx.currentTime); // 85Hz Base
      
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(170, ctx.currentTime); // Harmonic 170Hz

      // Low pass to make it a warm background rumbling hum
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(120, ctx.currentTime);

      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.5); // Fade in drone

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();

      this.currentThinkingNode = [osc1, osc2];
      this.currentThinkingGain = gainNode;
    } catch (e) {
      console.warn('Thinking hum failure', e);
    }
  }

  stopThinkingHum() {
    try {
      if (this.currentThinkingGain && this.ctx) {
        const now = this.ctx.currentTime;
        const gain = this.currentThinkingGain;
        try {
          gain.gain.setValueAtTime(gain.gain.value, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        } catch (_) {}
        
        setTimeout(() => {
          this.currentThinkingNode.forEach(osc => {
            try { osc.stop(); } catch (_) {}
          });
          this.currentThinkingNode = [];
          this.currentThinkingGain = null;
        }, 500);
      }
    } catch (e) {
      console.warn('Stop hum failure', e);
    }
  }

  playUIAudioTick() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      const ctx = this.ctx!;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1800, now);
      
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {
      console.warn('UI tick failure', e);
    }
  }

  playCompileSuccessChime() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      const ctx = this.ctx!;
      const now = ctx.currentTime;

      // Play a lovely high-tech complete arpeggio / success chime
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const delay = idx * 0.08;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + delay);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.05, now + delay + 0.3);

        gain.gain.setValueAtTime(0, now + delay);
        gain.gain.linearRampToValueAtTime(0.08, now + delay + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.4);
      });
    } catch (e) {
      console.warn('Success chime failure', e);
    }
  }
}

export const audio = new SoundManager();
