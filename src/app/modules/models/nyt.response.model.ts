export interface INYTRespose {
  articles: any;
  status: string;
  copyright: string;
  section: string;
  last_updated: Date;
  num_results: number;
  results: IArticle[];
}
export interface IArticle {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  updated_date: Date;
  created_date: Date;
  published_date: Date;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: IMultimedia[];
  short_url: string;
}
export interface IMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}