import { FeaturesHome } from "./features/features";
import { HeaderHome } from "./header/header";
import { PreviewSectionHome } from "./sections/preview";

export const HomeView = () => {
  return (
    <>
      <HeaderHome />
      {/* <PreviewSectionHome /> */}
      <FeaturesHome />

      {/* <PluginsSectionHome />

      <TabsSectionHome /> */}
    </>
  );
};
