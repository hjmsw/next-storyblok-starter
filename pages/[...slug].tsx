import Layout from "@components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
} from "@storyblok/react";
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Page({ story, navigation }) {

  story = useStoryblokState(story);
  navigation = useStoryblokState(navigation);

  return (
    <Layout story={story} navigation={navigation} />
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug = '/home';

  if (params && typeof params.slug == 'object') {
    slug = params.slug.join("/");
  }

  let sbParams = {
    version: 'published',
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/pages/${slug}`, sbParams);
  let { data: navigation_data } = await storyblokApi.get('cdn/stories/navigation', sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      navigation: navigation_data ? navigation_data.story : false,
    },
    revalidate: 3600,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug.replace('pages/', '');

    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
