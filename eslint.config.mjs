import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const baseConfig = [...compat.extends("next/core-web-vitals")];

// Supprime la clé "parse" qui contient une fonction pour éviter l'erreur de sérialisation
const cleanConfig = baseConfig.map((config) => {
  const { parse, ...rest } = config;
  return rest;
});

export default cleanConfig;
