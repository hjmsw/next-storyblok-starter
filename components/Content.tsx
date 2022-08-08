import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const Content = ({ blok }) => {
  return (
    <div className="pt-8 md:pt-20 px-8 md:px-20 dark:text-white" {...storyblokEditable(blok)}>
      <h2 className="text-3xl">{blok.title}</h2>
      {render(blok.body)}
    </div>
  );
};

export default Content;
