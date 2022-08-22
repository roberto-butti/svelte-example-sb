
import { storyblokInit, apiPlugin, getComponent } from "@storyblok/svelte";
import { useStoryblokApi } from "@storyblok/svelte";
import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Teaser from '../components/Teaser.svelte';
import { error } from '@sveltejs/kit';



storyblokInit({
    accessToken: "W1vLyxT5rQ15jBpANjnv0gtt",
    use: [apiPlugin],
    components: {
        feature: Feature,
        grid: Grid,
        page: Page,
        teaser: Teaser,
    },
});


/** @type {import('./$types').PageLoad} */
export async function load() {

    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/home", {
        version: "draft",
    });
    // console.log(data.story)
    return {
        story: data.story
    }
    throw error(404, 'No data from stroyblok');
}


