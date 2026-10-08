export interface Citation {
  index: number;
  documentName: string;
  page: number;
  text: string;
}

export interface Answer {
  answer: string;
  citations: Citation[];
}

export interface UploadedDocument {
  id: string;
  name: string;
  pages: number;
}
