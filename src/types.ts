/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum LoadingStage {
  SPLASH = 'SPLASH',
  CHATBOX_ENTRANCE = 'CHATBOX_ENTRANCE',
  TYPING_PROMPT = 'TYPING_PROMPT',
  THINKING = 'THINKING',
  CODE_TERMINAL = 'CODE_TERMINAL',
  HERO_REVEAL = 'HERO_REVEAL',
}

export interface SoundConfig {
  enabled: boolean;
  volume: number; // 0.0 to 1.0
}

export type TimelineSpeed = 'slow' | 'normal' | 'fast' | 'instant';

export interface LoaderState {
  stage: LoadingStage;
  sound: SoundConfig;
  speed: TimelineSpeed;
}

export interface ThinkingStep {
  id: number;
  label: string;
  duration: number; // ms
  status: 'pending' | 'active' | 'completed';
}

export interface FileItem {
  name: string;
  language: string;
  code: string;
}
