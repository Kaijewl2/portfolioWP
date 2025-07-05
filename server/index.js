import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link, NavLink } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { RiHome2Fill } from "react-icons/ri";
import { useEffect } from "react";
import { motion } from "framer-motion";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Body() {
  return /* @__PURE__ */ jsx("div", { className: "body-container", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: "/app/assets/robloxMemePt1-NoBG.png",
      alt: "Roblox Meme",
      className: "img-frog w-200"
    }
  ) });
}
function Header() {
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { className: "font-playfair text-center text-7xl", children: [
    /* @__PURE__ */ jsx("h1", { className: "pt-5 text-gray-400", children: "I'm kaijewl2." }),
    /* @__PURE__ */ jsx("h1", { className: "pt-5", children: "Professionally Unemployed." })
  ] }) });
}
function Nav() {
  return /* @__PURE__ */ jsxs("nav", { children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "title pl-5", children: /* @__PURE__ */ jsx(RiHome2Fill, {}) }),
    /* @__PURE__ */ jsxs("ul", { className: " pr-15", children: [
      /* @__PURE__ */ jsx("li", { className: "pr-20", children: /* @__PURE__ */ jsx(NavLink, { to: "/projects", className: "buttons", children: "Projects" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/socials", className: "buttons", children: "Socials" }) })
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "kaijewl2"
  }, {
    name: "description",
    content: "best dev page oat"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "App",
      children: /* @__PURE__ */ jsx(Nav, {})
    }), /* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Body, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function SocialButtons() {
  return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("div", { className: "social-buttons", children: [
    /* @__PURE__ */ jsx("div", { className: "discordButton", children: /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => window.open(
          "https://discord.com/channels/1254611066101436559/1254613997479661598",
          "_blank"
        ),
        className: "px-6 py-2 rounded-md relative radial-gradient",
        initial: { "--x": "100%", scale: 1 },
        animate: { "--x": "-100%" },
        whileHover: { scale: 1.15 },
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1
          }
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask", children: "Discord" }),
          /* @__PURE__ */ jsx("span", { className: "block absolute inset-0 rounded-md p-px linear-overlay" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "youtubeButton", children: /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => window.open(
          "https://www.youtube.com/@kaijewl2/featured",
          "_blank"
        ),
        className: "px-6 py-2 rounded-md relative radial-gradient",
        initial: { "--x": "100%", scale: 1 },
        animate: { "--x": "-100%" },
        whileHover: { scale: 1.15 },
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1
          }
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask", children: "Youtube" }),
          /* @__PURE__ */ jsx("span", { className: "block absolute inset-0 rounded-md p-px linear-overlay" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "githubButton", children: /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => window.open("https://github.com/Kaijewl2", "_blank"),
        className: "px-6 py-2 rounded-md relative radial-gradient",
        initial: { "--x": "100%", scale: 1 },
        animate: { "--x": "-100%" },
        whileHover: { scale: 1.15 },
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1
          }
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask", children: "GitHub" }),
          /* @__PURE__ */ jsx("span", { className: "block absolute inset-0 rounded-md p-px linear-overlay" })
        ]
      }
    ) })
  ] }) });
}
const socials = UNSAFE_withComponentProps(function Socials({}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(SocialButtons, {})]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: socials
}, Symbol.toStringTag, { value: "Module" }));
const projects = UNSAFE_withComponentProps(function Projects({}) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx("div", {
      className: "flex flex-col items-center justify-center min-h-screen",
      children: /* @__PURE__ */ jsx("h1", {
        className: "text-3xl text-center",
        children: "Give me a sec 💀🙏"
      })
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: projects
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Bb1STbbk.js", "imports": ["/assets/chunk-QMGIS6GS-CHay9yT7.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-EVIEwE5K.js", "imports": ["/assets/chunk-QMGIS6GS-CHay9yT7.js"], "css": ["/assets/root-DKyVBOHO.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DBj7ETgp.js", "imports": ["/assets/chunk-QMGIS6GS-CHay9yT7.js", "/assets/nav-dz0nUURc.js"], "css": ["/assets/home-CNVPQGWj.css", "/assets/nav-487oQ98b.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/socials": { "id": "routes/socials", "parentId": "root", "path": "socials", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/socials-CooGH5X5.js", "imports": ["/assets/chunk-QMGIS6GS-CHay9yT7.js", "/assets/nav-dz0nUURc.js"], "css": ["/assets/socials-CZu-Zw2G.css", "/assets/nav-487oQ98b.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects": { "id": "routes/projects", "parentId": "root", "path": "projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/projects-BUzECDwq.js", "imports": ["/assets/chunk-QMGIS6GS-CHay9yT7.js", "/assets/nav-dz0nUURc.js"], "css": ["/assets/nav-487oQ98b.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-4f5fd6f1.js", "version": "4f5fd6f1", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/socials": {
    id: "routes/socials",
    parentId: "root",
    path: "socials",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
