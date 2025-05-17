import { visit } from "unist-util-visit";
import ogs from "open-graph-scraper";
import isUrl from "is-url";

const remarkExternalUrlRef = () => {
  return async (tree) => {
    const textNodesToTransform = [];

    visit(tree, "text", (node, index, parent) => {
      if (!parent) return; // Skip if no parent is found

      const urls = node.value.split(/\s+/).filter((word) => isUrl(word));
      if (urls.length > 0) {
        textNodesToTransform.push({ parent, index, urls });
      }
    });

    for (let { parent, index, urls } of textNodesToTransform) {
      const newNodes = await Promise.all(urls.map((url) => transformNode(url)));
      parent.children.splice(index, 1, ...newNodes);
    }

    return tree;
  };
};

const transformNode = async (url) => {
  const data = await fetchData(url);
  return {
    type: "mdxJsxFlowElement",
    name: "ExternalUrlRef",
    attributes: [
      { type: "mdxJsxAttribute", name: "url", value: url },
      { type: "mdxJsxAttribute", name: "title", value: data.title },
      { type: "mdxJsxAttribute", name: "description", value: data.description },
      { type: "mdxJsxAttribute", name: "image", value: data.image },
    ],
    children: [],
    data: {
      _mdxExplicitJsx: true,
    },
  };
};

const fetchData = async (url) => {
  const options = {
    url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    },
    timeout: 10000,
  };
  try {
    const { result } = await ogs(options);
    if (result.success) {
      const title = result.ogTitle || result.twitterTitle || new URL(url).hostname;
      const description = result.ogDescription || result.twitterDescription || "No description available";
      const image = result.ogImage && result.ogImage.length > 0
        ? result.ogImage[0].url
        : result.twitterImage && result.twitterImage.length > 0
          ? result.twitterImage[0].url
          : "/img/cat_hero.svg";
      return { title, description, image };
    } else {
      throw new Error("OGS failed to fetch the metadata");
    }
  } catch (error) {
    console.warn(`Warning: Error fetching data for URL ${url}: ${error.message}`);
    return {
      title: new URL(url).hostname,
      description: "No description available",
      image: "/img/cat_hero.svg",
    };
  }
};

module.exports = remarkExternalUrlRef;

