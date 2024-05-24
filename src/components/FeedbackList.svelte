<script lang="ts">
    import { FeedbackStore } from "../stores";
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";

    // export let feedback: {
    //     id: number;
    //     rating: number;
    //     text: string;
    // }[];

    // const unsuscribe = FeedbackStore.subscribe((data) => (feedback = data));
    // onDestroy(() => {
    //     unsuscribe();
    // });
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade={{ duration: 500 }}>
        <FeedbackItem item={fb} />
    </div>
{/each}
