import { MetadataRoute } from "next";

const BASE_URL = "https://movelart.com.br";

const ambienteSlugs = [
  "cozinha",
  "dormitorio",
  "closet",
  "sala",
  "sala-de-jantar",
  "home-office",
  "banheiro",
  "area-de-servico",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const ambienteUrls: MetadataRoute.Sitemap = ambienteSlugs.map((slug) => ({
    url: `${BASE_URL}/ambientes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/empresa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ambientes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/processo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...ambienteUrls,
  ];
}
