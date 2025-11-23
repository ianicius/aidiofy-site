export type ProcessingStatus =
  | "IDLE"
  | "UPLOADING"
  | "PROCESSING_OCR"
  | "OCR_COMPLETE"
  | "GENERATING_AUDIO"
  | "PLAYING"
  | "ERROR";

export interface OcrResult {
  text: string;
}

export type VoiceName = "Kore" | "Puck" | "Charon" | "Fenrir" | "Zephyr";

export interface SpeechConfig {
  voiceName: VoiceName;
}
