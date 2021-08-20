import { DocSearchHit } from './DocSearchHit';

export type StoredDocSearchHit = Omit<
  DocSearchHit,
  '_snippetResult'
>;
