import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - AKUSHONTOY`;
  }, [title]);
};

export default useTitle;
