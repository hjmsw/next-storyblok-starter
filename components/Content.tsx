import { storyblokEditable } from "@storyblok/react";
import RichText from "./RichText";

const Content = ({ blok }) => {
  return (
    <div className="pt-8 md:pt-20 px-8 md:px-20 dark:text-white" {...storyblokEditable(blok)}>
      <h2 className="text-3xl mt-2 mb-4">{blok.title}</h2>
      <RichText content={blok.body} />
    </div>
  );
};

export default Content;
