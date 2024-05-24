import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industru",
    },
    {
        id: 2,
        rating: 6,
        text: " text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime",
    },
    {
        id: 3,
        rating: 10,
        text: "as survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    },

])