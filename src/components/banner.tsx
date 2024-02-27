// import { Banner as CommonBanner } from "@fitplan/web-components";
import {
  BANNER_BUTTON_TYPE,
  BANNER_HEIGHT,
  BANNER_PADDING,
  BANNER_VERTICAL_STACK_MOBILE,
  CONTENT_LAYOUT_IMAGE_PLACEMENT,
} from "../utils/constants";
import { redirect } from "next/navigation";

interface IBannerProps {
  description: string;
  contentLayout?: any;
  padding?: string;
  title?: string;
  verticalSize: string;
}
const Banner = ({
  description,
  contentLayout = "image left",
  padding = "none",
  title = "",
  verticalSize = "small",
}: IBannerProps) => {
  let textAlignment: any = "";

  if (contentLayout === "image left" || contentLayout === "image right") {
    textAlignment = "none";
  }

  return (
    <div
      className={`banner-container`}
      style={{
        padding: `${BANNER_PADDING?.[padding]} 0`,
      }}
    >
      {/* <CommonBanner
        description={description}
        title={title}
        textAlignment={textAlignment ?? "left"}
        imageAlignment={"left"}
        links={[]}
        internalRouteKey="slug"
        gatsByNavigate={redirect}
        bannerClickableLink={{}}
        backgroundImages={[]}
        bannerHeight={BANNER_HEIGHT?.[verticalSize?.toLowerCase()]}
        carouselAutoPlaySpeed={3000}
        sideImages={
          [
            {
              assetType: "Image",
              alternateText: "NTS Home",
              desktopAsset: [
                {
                  localFile: {
                    name: "designed-everybody",
                    childImageSharp: {
                      gatsbyImageData: {
                        layout: "constrained",
                        placeholder: {
                          fallback:
                            "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAXILPxdnoLH/xAAZEAADAQEBAAAAAAAAAAAAAAABAgMEABL/2gAIAQEAAQUCCTKGCpyTl5pkXIK62pz7Kzb/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGq/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BR//EAB8QAAICAgEFAAAAAAAAAAAAAAECABEDUTESISIyQf/aAAgBAQAGPwIkP23BbWNicmZMvK9PrLYePxQaqVjyOq6u5//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQWHh/9oACAEBAAE/IcQt3pHNSRdYr9qXYdVeAUi6g4tiOyffRP/aAAwDAQACAAMAAAAQZ9//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QmFP/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBI/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUYGRsf/aAAgBAQABPxBFg8x3Bpa3ye5ec9VLkelgZVcov2ItNPDhEveQ32wQYW1BlWtrHCMAqIpwi/E//9k=",
                        },
                        images: {
                          fallback: {
                            src: "https://stage.nikestudios.com/static/bd4f829f3940873f6c40761dae7365fe/d6d06/designed-everybody.webp",
                            srcSet:
                              "https://stage.nikestudios.com/static/bd4f829f3940873f6c40761dae7365fe/3b620/designed-everybody.jpg 320w,\nhttps://stage.nikestudios.com/static/bd4f829f3940873f6c40761dae7365fe/c61e0/designed-everybody.jpg 1023w,\nhttps://stage.nikestudios.com/static/bd4f829f3940873f6c40761dae7365fe/59ada/designed-everybody.jpg 1332w",
                            sizes: "(min-width: 1332px) 1332px, 100vw",
                          },
                          sources: [
                            {
                              srcSet:
                                "https://stage.nikestudios.com/static/bd4f829f3940873f6c40761dae7365fe/e3f82/designed-everybody.webp 320w,\nhttps://stage.nikestudios.com/static/bd4f829f3940873f6c40761dae7365fe/aa779/designed-everybody.webp 1023w,\nhttps://stage.nikestudios.com/static/bd4f829f3940873f6c40761dae7365fe/d6d06/designed-everybody.webp 1332w",
                              type: "image/webp",
                              sizes: "(min-width: 1332px) 1332px, 100vw",
                            },
                          ],
                        },
                        width: 1332,
                        height: 956,
                      },
                    },
                  },
                  file: {
                    url: "https://images.ctfassets.net/ijyd7uvl28xy/1oIEAdoWzaGuaCWgpOYSh7/349298cfd90173aa146e4d0136bc4597/designed-everybody.jpg",
                    fileName: "designed-everybody.jpg",
                    contentType: "image/jpeg",
                  },
                  title: "Newport Studio",
                  url: "https://images.ctfassets.net/ijyd7uvl28xy/1oIEAdoWzaGuaCWgpOYSh7/349298cfd90173aa146e4d0136bc4597/designed-everybody.jpg",
                },
              ],
              mobileAsset: [
                {
                  localFile: {
                    name: "designed-everybody",
                    childImageSharp: {
                      gatsbyImageData: {
                        layout: "constrained",
                        placeholder: {
                          fallback:
                            "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAXILPxdnoLH/xAAZEAADAQEBAAAAAAAAAAAAAAABAgMEABL/2gAIAQEAAQUCCTKGCpyTl5pkXIK62pz7Kzb/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGq/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BR//EAB8QAAICAgEFAAAAAAAAAAAAAAECABEDUTESISIyQf/aAAgBAQAGPwIkP23BbWNicmZMvK9PrLYePxQaqVjyOq6u5//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQWHh/9oACAEBAAE/IcQt3pHNSRdYr9qXYdVeAUi6g4tiOyffRP/aAAwDAQACAAMAAAAQZ9//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QmFP/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBI/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUYGRsf/aAAgBAQABPxBFg8x3Bpa3ye5ec9VLkelgZVcov2ItNPDhEveQ32wQYW1BlWtrHCMAqIpwi/E//9k=",
                        },
                        images: {
                          fallback: {
                            src: "/static/bd4f829f3940873f6c40761dae7365fe/59ada/designed-everybody.jpg",
                            srcSet:
                              "/static/bd4f829f3940873f6c40761dae7365fe/3b620/designed-everybody.jpg 320w,\n/static/bd4f829f3940873f6c40761dae7365fe/c61e0/designed-everybody.jpg 1023w,\n/static/bd4f829f3940873f6c40761dae7365fe/59ada/designed-everybody.jpg 1332w",
                            sizes: "(min-width: 1332px) 1332px, 100vw",
                          },
                          sources: [
                            {
                              srcSet:
                                "/static/bd4f829f3940873f6c40761dae7365fe/e3f82/designed-everybody.webp 320w,\n/static/bd4f829f3940873f6c40761dae7365fe/aa779/designed-everybody.webp 1023w,\n/static/bd4f829f3940873f6c40761dae7365fe/d6d06/designed-everybody.webp 1332w",
                              type: "image/webp",
                              sizes: "(min-width: 1332px) 1332px, 100vw",
                            },
                          ],
                        },
                        width: 1332,
                        height: 956,
                      },
                    },
                  },
                  file: {
                    url: "//images.ctfassets.net/ijyd7uvl28xy/1oIEAdoWzaGuaCWgpOYSh7/349298cfd90173aa146e4d0136bc4597/designed-everybody.jpg",
                    fileName: "designed-everybody.jpg",
                    contentType: "image/jpeg",
                  },
                  title: "Newport Studio",
                  url: "https://images.ctfassets.net/ijyd7uvl28xy/1oIEAdoWzaGuaCWgpOYSh7/349298cfd90173aa146e4d0136bc4597/designed-everybody.jpg",
                },
              ],
              desktopVideoThumbnail: null,
              mobileVideoThumbnail: null,
            },
          ] || []
        }
        textColor={"black"}
        backgroundOpacity={0 / 100}
        isDarkFont={true}
        imageFit={"contain"}
        buttonType={BANNER_BUTTON_TYPE?.[0]}
        showCarouselArrows={false}
        showCarouselIndicators={false}
        autoScroll={true}
        imageFitCoverAlignment={"center-center"}
        // verticalStackForMobile={BANNER_VERTICAL_STACK_MOBILE?.["image-on-top"]}
        // textAlignmentForMobile={"center"}
        // verticalTextAlignment={"center"}
        sideSection={
          //   content?.sideSection && (
          <></>
          // <BannerModules
          //   content={[content?.sideSection]}
          //   bannerContent={content}
          //   studioId={studioId}
          // />
          //   )
        }
        isStaticSite={false}
        gatsbyBaseUrl={""}
      /> */}
    </div>
  );
};

export default Banner;
