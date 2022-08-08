import Head from "next/head";
import NavTripleMenu from "./NavTripleMenu";
import Footer from "./Footer";
import { StoryblokComponent } from "@storyblok/react";
import { StoryData } from "storyblok-js-client";

type Props = {
    story: StoryData,
    navigation: StoryData,
}

const Layout = ({ story, navigation }: Props) => (
    <div className="dark:bg-gray-700">
        <Head>
            <title>{story ? story.name : "My Site"}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
            <NavTripleMenu content={navigation.content} />
        </header>

        <div className="">
            <StoryblokComponent blok={story.content} />
        </div>

        <Footer content={navigation.content} />
    </div>
)

export default Layout;
