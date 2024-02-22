export interface NewsArticles {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
}

export interface Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

export interface Hits {
  total: Total;
  max_score: number;
  hits: Hit[];
}

export interface Total {
  value: number;
  relation: string;
}

export interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Source;
}

export interface Source {
  Entity: Entity;
  Title: string;
  Lang: string;
  Text: string;
  Topic: string;
  DateTime: string;
  NewsID: string;
}

export interface Entity {
  ORG: string[];
}
