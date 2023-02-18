import { useEffect } from "react";

const TitleHook = (title) => {
  useEffect(() => {
    document.title = `${title}-Ema-john`;
  }, [title]);
};

export default TitleHook;
