import { useRouter } from "next/router";

export default function useHomepage() {
  return useRouter().asPath === "/";
}
