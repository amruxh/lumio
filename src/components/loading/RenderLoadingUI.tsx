// import ProductsSkeleton from "../skeleton/ProductsSkeleton";
import Loading from "./Loading";
import HomeSkeleton from "../skeleton/HomeSkeleton";

type GlobalLoadingProps = {
  loadingPage: string | null;
};

const RenderLoadingUI = ({ loadingPage }: GlobalLoadingProps) => {
  if (!loadingPage) return null;

  if (loadingPage.split("?")[0] === "/") {
    return <HomeSkeleton />;
  }

  console.log(loadingPage);

  if (loadingPage === "/") {
    return <HomeSkeleton />;
  }

  // Default fallback loading UI
  return <Loading />;
};

export default RenderLoadingUI;
