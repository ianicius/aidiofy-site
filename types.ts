export enum ProcessingStatus {
  IDLE = "IDLE",
  UPLOADING = "UPLOADING",
  PROCESSING_OCR = "PROCESSING_OCR",
  OCR_COMPLETE = "OCR_COMPLETE",
  GENERATING_AUDIO = "GENERATING_AUDIO",
  PLAYING = "PLAYING",
  ERROR = "ERROR",
}

export interface OcrResult {
  text: string;
}

export enum VoiceName {
  Kore = "Kore",
  Puck = "Puck",
  Charon = "Charon",
  Fenrir = "Fenrir",
  Zephyr = "Zephyr",
}

export interface SpeechConfig {
  voiceName: VoiceName;
}