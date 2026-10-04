export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Anime Adventures Wiki",
  shortName: "Anime Adventures",
  logoText: "AA",
  tagline: "Codes, Units, Tier Lists & Tower Defense Guides",
  description: "Your ultimate guide to Anime Adventures on Roblox! Explore active working codes, unit tier lists, summon strategies, upgrades, and tower defense progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://animeadventures.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://animeadventures.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/8304191830/Anime-Adventures",
  heroVideoId: "gLPtZIdcpuo", // Anime Adventures (Roblox) legendary towers gameplay showcase
  social: {
    discord: "https://discord.gg/gomu",
    youtube: "https://www.youtube.com/results?search_query=Anime+Adventures+Roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
