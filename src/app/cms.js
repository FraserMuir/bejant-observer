import CMS from "netlify-cms-app";
import { withStyledComponentsRendered } from "../helpers/styleInjector";

import { PagePreview } from "./GenericPreviews";

import { Home } from "./pages/index/Home";
import { ContactUs } from "./pages/contact-us/ContactUs";
import { AboutUs } from "./pages/about-us/AboutUs";

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(PagePreview, Home));
CMS.registerPreviewTemplate("contact-us", withStyledComponentsRendered(PagePreview, ContactUs));
CMS.registerPreviewTemplate("about-us", withStyledComponentsRendered(PagePreview, AboutUs));