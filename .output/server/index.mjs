globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/assets/about-DLwTGRqs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"59e-q6jNvzCrj2Khd4rgjzyl/GWvA4c"',
    "mtime": "2026-06-06T13:46:04.395Z",
    "size": 1438,
    "path": "../public/assets/about-DLwTGRqs.js"
  },
  "/assets/contact-OqyCuKij.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6f-1ZW39lkN6ZHTRX+bVlfut1kKO38"',
    "mtime": "2026-06-06T13:46:04.394Z",
    "size": 2671,
    "path": "../public/assets/contact-OqyCuKij.js"
  },
  "/assets/cart-BoC9gtBx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10db-dY1musZoY0raZuYkyr0jlpWCE30"',
    "mtime": "2026-06-06T13:46:04.394Z",
    "size": 4315,
    "path": "../public/assets/cart-BoC9gtBx.js"
  },
  "/assets/dashboard-DukGx79I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11c7-7JzLETb9gDJWG9LWpTJDs4/v2LY"',
    "mtime": "2026-06-06T13:46:04.394Z",
    "size": 4551,
    "path": "../public/assets/dashboard-DukGx79I.js"
  },
  "/assets/EmptyState-DKCIHZ9e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23f-mh+gMe2tKVqugAq+3UlR5qoCNGg"',
    "mtime": "2026-06-06T13:46:04.395Z",
    "size": 575,
    "path": "../public/assets/EmptyState-DKCIHZ9e.js"
  },
  "/assets/faq-Bc09fKCw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"640-shp7tOc+g5jDprumICJHXXMcGeY"',
    "mtime": "2026-06-06T13:46:04.394Z",
    "size": 1600,
    "path": "../public/assets/faq-Bc09fKCw.js"
  },
  "/assets/forgot-password-CbB3RQJc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3dd-hSV+ZT44AkIXdzF/MdhV/crBwYA"',
    "mtime": "2026-06-06T13:46:04.393Z",
    "size": 989,
    "path": "../public/assets/forgot-password-CbB3RQJc.js"
  },
  "/assets/format-IpP0JcoM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"50-prSDYVFv8IBFgl6M80jQxq5H4i0"',
    "mtime": "2026-06-06T13:46:04.397Z",
    "size": 80,
    "path": "../public/assets/format-IpP0JcoM.js"
  },
  "/assets/checkout-RzfbD0hy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1285-2U4pEZG7sksAVYyH3mAhZlS9wfQ"',
    "mtime": "2026-06-06T13:46:04.394Z",
    "size": 4741,
    "path": "../public/assets/checkout-RzfbD0hy.js"
  },
  "/assets/Layout-Cq7EmnW7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"246c-9tOKHaOqvpMjtrf7krtUTbg2gmQ"',
    "mtime": "2026-06-06T13:46:04.399Z",
    "size": 9324,
    "path": "../public/assets/Layout-Cq7EmnW7.js"
  },
  "/assets/index-m_A_h_b1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20b4-fJzWKzF/bvobOCFpJilWN5cnE0c"',
    "mtime": "2026-06-06T13:46:04.394Z",
    "size": 8372,
    "path": "../public/assets/index-m_A_h_b1.js"
  },
  "/assets/login-B9u_Erq7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"609-X4C+iB3PjIDOPzHCntIbPzn1yCI"',
    "mtime": "2026-06-06T13:46:04.393Z",
    "size": 1545,
    "path": "../public/assets/login-B9u_Erq7.js"
  },
  "/assets/map-pin-B5Mh-Z4q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"100-BNtqw0EyyOOQFal9I311QB8ej0A"',
    "mtime": "2026-06-06T13:46:04.394Z",
    "size": 256,
    "path": "../public/assets/map-pin-B5Mh-Z4q.js"
  },
  "/assets/order-confirmation-162swK-J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4c3-DXgaeORegowmrsPNwBF5pWd6XRw"',
    "mtime": "2026-06-06T13:46:04.393Z",
    "size": 1219,
    "path": "../public/assets/order-confirmation-162swK-J.js"
  },
  "/assets/plus-CAD_zash.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e0-ms1HT7kb28Bu1w7TnmFkeaFJIgQ"',
    "mtime": "2026-06-06T13:46:04.395Z",
    "size": 224,
    "path": "../public/assets/plus-CAD_zash.js"
  },
  "/assets/privacy-zF-zgEOm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b4-cQaFJuXdTTiGPoyIwV3NtAoYXR0"',
    "mtime": "2026-06-06T13:46:04.393Z",
    "size": 1204,
    "path": "../public/assets/privacy-zF-zgEOm.js"
  },
  "/assets/ProductCard-WjASXjAV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"af6-CK9JjG6QmBsdLSS/fIQAGHds+44"',
    "mtime": "2026-06-06T13:46:04.396Z",
    "size": 2806,
    "path": "../public/assets/ProductCard-WjASXjAV.js"
  },
  "/assets/product._id-Bpl-7ZPW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"117d-0k+6RJtB/MuJYJeUFX4+IV7lo50"',
    "mtime": "2026-06-06T13:46:04.395Z",
    "size": 4477,
    "path": "../public/assets/product._id-Bpl-7ZPW.js"
  },
  "/assets/product._id-IhzoKfBs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"120-TZmpsQvfED2rUjVlc7HkIbzjFbo"',
    "mtime": "2026-06-06T13:46:04.398Z",
    "size": 288,
    "path": "../public/assets/product._id-IhzoKfBs.js"
  },
  "/assets/SectionHeader-DbfTblsS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"599-vYq/sq04UrZOTU7taXtPOmo2apk"',
    "mtime": "2026-06-06T13:46:04.396Z",
    "size": 1433,
    "path": "../public/assets/SectionHeader-DbfTblsS.js"
  },
  "/assets/register-BwzBMU7N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4bd-sTaLH0asyUqOr6r3yxW1/nMqEko"',
    "mtime": "2026-06-06T13:46:04.393Z",
    "size": 1213,
    "path": "../public/assets/register-BwzBMU7N.js"
  },
  "/assets/styles-CB5CIN-k.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"15088-01IRYbBruBIE8uUwiJCwLi25Apo"',
    "mtime": "2026-06-06T13:46:04.393Z",
    "size": 86152,
    "path": "../public/assets/styles-CB5CIN-k.css"
  },
  "/assets/index-BPJTRmIE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"611c5-SipTN+zYdoRd8hUrJZtM9GeWnDU"',
    "mtime": "2026-06-06T13:46:04.392Z",
    "size": 397765,
    "path": "../public/assets/index-BPJTRmIE.js"
  },
  "/assets/shop-DGlQDy5e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f73-qfK89/FsxjNQqH5xsxIhrnBNaQc"',
    "mtime": "2026-06-06T13:46:04.393Z",
    "size": 3955,
    "path": "../public/assets/shop-DGlQDy5e.js"
  },
  "/assets/terms-B0sMOzQE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"46f-wgEE+7JzlPerbiHfy+x3exavWKE"',
    "mtime": "2026-06-06T13:46:04.384Z",
    "size": 1135,
    "path": "../public/assets/terms-B0sMOzQE.js"
  },
  "/assets/wishlist-DmLH2HYi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2cd-8dkKYkxp8WFYF5kYNtOgwqSbm9s"',
    "mtime": "2026-06-06T13:46:04.392Z",
    "size": 717,
    "path": "../public/assets/wishlist-DmLH2HYi.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_jSEidi = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_jSEidi };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
