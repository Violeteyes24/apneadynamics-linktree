import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { offers } from "@/lib/offers";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type Params = {
  slug: string;
};

export async function GET(_request: Request, { params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const offer = offers.find((item) => item.slug === slug);

  if (!offer) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const headersList = await headers();
    const referrer = headersList.get("referer");
    const userAgent = headersList.get("user-agent");
    const supabase = getSupabaseAdmin();

    if (supabase) {
      const { error } = await supabase.from("link_clicks").insert({
        offer_slug: offer.slug,
        destination_url: offer.href,
        referrer,
        user_agent: userAgent,
      });

      if (error) {
        console.error("Click log failed:", error);
      }
    } else {
      console.warn("Supabase env missing; click not logged.");
    }
  } catch (error) {
    console.error("Unexpected click logging error:", error);
  }

  return NextResponse.redirect(offer.href, { status: 307 });
}
