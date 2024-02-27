// components/builder.tsx
"use client";
import { BuilderComponent, useIsPreviewing, Builder } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import Banner from "./banner";

interface BuilderPageProps {
  content?: BuilderContent;
}

// Replace with your Public API Key
builder.init("68c46ab1288b49c0a458451a84ebd7ec");

Builder.registerComponent(Banner, {
  name: "Banner",
  inputs: [
    { name: "description", type: "string" },
    { name: "contentLayout", type: "string" },
    { name: "padding", type: "string" },
    { name: "title", type: "string" },
    { name: "verticalSize", type: "string" },
  ],
});
export function RenderBuilderContent({ content }: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }
  // If the `content` is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
