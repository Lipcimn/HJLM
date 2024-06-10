export interface TenorData {
  results: Result[];
}

export interface Result {
  id: string;
  title: string;
  media_formats: {
    webm: MediaFormat;
    tinygif: MediaFormat;
    nanogif: MediaFormat;
    nanomp4: MediaFormat;
    tinygifpreview: MediaFormat;
    gif: MediaFormat;
    nanogifpreview: MediaFormat;
    mediumgif: MediaFormat;
    nanowebm: MediaFormat;
    gifpreview: MediaFormat;
    mp4: MediaFormat;
    webp: MediaFormat;
    loopedmp4: MediaFormat;
    tinywebm: MediaFormat;
    tinymp4: MediaFormat;
  };
  created: number;
  content_description: string;
  itemurl: string;
  url: string;
  tags: [string];
  flags: [];
  hasaudio: boolean;
}

interface MediaFormat {
  url: string;
  duration: number;
  preview: string;
  dims: [number, number];
  size: number;
}
