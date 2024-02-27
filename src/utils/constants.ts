export const VERTICAL_ALIGNMENTS: Record<string, string> = {
  top: "start",
  center: "center",
  bottom: "end",
};

export const HORIZONTAL_ALIGNMENTS: Record<string, string> = {
  left: "start",
  center: "center",
  right: "end",
};

export const BANNER_HEIGHT: Record<string, string> = {
  full: "100vh",
  large: "85vh",
  medium: "75vh",
  small: "50vh",
  auto: "auto",
};

export const BANNER_PADDING: Record<string, string> = {
  none: "0px",
  small: "32px",
  medium: "64px",
  large: "128px",
};

export const BANNER_VERTICAL_STACK_MOBILE: Record<string, string> = {
  "image-on-top": "column",
  "image-on-bottom": "column-reverse",
};

export const CAROUSEL_PADDING: Record<string, string> = {
  none: "0px",
  small: "32px",
  medium: "64px",
  large: "128px",
};

export const BANNER_BUTTON_TYPE: Record<string, string> = {
  0: "default",
  1: "primary",
  2: "secondary",
  3: "tertiary",
  4: "link-bold",
  5: "link",
};

export const CONTENT_LAYOUT_IMAGE_PLACEMENT = {
  "text left + image right": "right",
  "text right + image left": "left",
  text: "none",
  "image left": "left",
  "image right": "right",
  "image center": "center",
};

export const GENDER_OPTIONS = [
  { label: "Female", value: "F" },
  { label: "Male", value: "M" },
  { label: "Other", value: "O" },
  { label: "Unknown", value: "U" },
];

export const US_NUMBER_REGEX =
  /^(?:\(\d{3}\)\s?\d{3}-\d{4}|\d{3}\s\d{7}|\d{3}\s\d{3}\s\d{4}|\d{3}\.\d{3}\.\d{4}|\d{10})$/g;

export const STUDIO_CLASS_CAROUSEL_JSON = {
  name: "Class Types Carousel",
  internal: {
    type: "ContentfulCarousel",
  },
  horizontalAlignment: "Left",
  verticalAlignment: "Bottom",
  itemsToShow: 4,
  autoScroll: false,
  showPagination: true,
  padding: "none",
  showSideArrows: false,
  textColor: "dark",
  isShowGradient: false,
  gradientDirection: "Bottom - Top",
  inLineSideArrow: false,
  items: [],
};


export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
