// Example file structure, app/[...page]/page.tsx
// You could alternatively use src/app/[...page]/page.tsx
"use client";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Replace with your Public API Key
builder.init("c037bb9eecf64da7a92704f51cd04886");

interface PageProps {
  params: {
    page: string[];
  };
}

const Page = async (props: PageProps) => {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
};

export default Page;
