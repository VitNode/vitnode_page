import { EmailsSectionFeatures } from "./sections/emails";
import { PluginsSectionFeatures } from "./sections/plugins";

export const FeaturesHome = () => {
  return (
    <div className="container my-20 space-y-16 lg:space-y-32">
      <PluginsSectionFeatures />
      <EmailsSectionFeatures />
    </div>
  );
};