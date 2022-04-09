export enum BlogPlatform {
  Devto = "Dev.to",
  Viblo = "Viblo",
}

export type ErrorResponse = {
  error: string;
  status: number;
};

export type DevArticle = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image?: string;
  published: boolean;
  published_at: string;
  tag_list: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  user: DevUser;
  reading_time_minutes: number;
  organization: DevOrganization;
  flare_tag: DevArticleFlareTag;
};

export type DevUser = {
  name: string;
  username: string;
  twitter_username?: string;
  github_username?: string;
  website_url?: string;
  profile_image: string;
  profile_image_90: string;
};

export type DevOrganization = {
  name: string;
  username: string;
  slug: string;
  profile_image: string;
  profile_image_90: string;
};

export type DevArticleFlareTag = {
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
};

export type VibloResponse<T> = {
  data: T;
};

export type VibloArticle = {
  id: number;
  title: string;
  slug: string;
  url: string;
  user_id: number;
  contents_short: string;
  contents: string;
  published_at: string;
  is_published: boolean;
  is_shared: boolean;
  updated_at: string;
  translation_source: null;
  trend_at: string | null;
  promoted_at: string | null;
  reading_time: number;
  points: number;
  views_count: number;
  clips_count: number;
  comments_count: number;
  rated_value: null;
  promoted: boolean;
  trending: boolean;
  is_draft: boolean;
  is_public: boolean;
  locale_code: null;
  is_video: boolean;
  thumbnail_url: null;
  user: VibloResponse<VibloUser>;
  tags: VibloResponse<VibloTag[]>;
};

export type VibloUser = {
  id: number;
  url: string;
  avatar: string;
  name: string;
  username: string;
  followers_count: number;
  reputation: number;
  posts_count: number;
  banned_at: null;
  following: boolean;
};

export type VibloTag = {
  slug: string;
  name: string;
  primary: boolean;
  image: string;
};
