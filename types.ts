
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Types for the application
export type ComplexityLevel = 'Elementary' | 'High School' | 'College' | 'Expert';
export type VisualStyle = 'Default' | 'Minimalist' | 'Realistic' | 'Cartoon' | 'Vintage' | 'Futuristic' | '3D Render' | 'Sketch';
export type Language = 'English' | 'Spanish' | 'French' | 'German' | 'Mandarin' | 'Japanese' | 'Hindi' | 'Arabic' | 'Portuguese' | 'Russian';

export interface SearchResultItem {
  title: string;
  url: string;
}

export interface GeneratedImage {
  id: string;
  data: string; // Base64 encoded data or URL
  prompt: string;
}

export interface VideoItem {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
