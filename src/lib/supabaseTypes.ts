export type Database = {
  public: {
    Tables: {
      link_clicks: {
        Row: {
          id: number;
          created_at: string;
          offer_slug: string;
          destination_url: string;
          referrer: string | null;
          user_agent: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string;
          offer_slug: string;
          destination_url: string;
          referrer?: string | null;
          user_agent?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string;
          offer_slug?: string;
          destination_url?: string;
          referrer?: string | null;
          user_agent?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
