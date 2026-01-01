import type { APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Harsh Singh";

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#171717",
          padding: "60px",
          justifyContent: "flex-end",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 56,
                      fontWeight: 600,
                      color: "#fafafa",
                      lineHeight: 1.2,
                      maxWidth: "900px",
                    },
                    children: title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 28,
                      color: "#a3a3a3",
                    },
                    children: "harshsingh.me",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    },
  );
};
