import { useEffect, useState } from "react";
import { Service } from "types/Service";

const unsplashApi = "https://source.unsplash.com/1920x1080/?wallpapers";

export function useUnsplash() {
  const [result, setResult] = useState<Service<string>>({ status: "loading" });

  useEffect(() => {
    fetch(unsplashApi)
      .then((res) => {
        setResult({ status: "loaded", payload: res.url });
      })
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
}
