<template>
  <button @click="twitterLink(url, {title})">{{text ? text : 'Tweet'}}</button>
</template>

<script>
export default {
  name: "twitter",
  methods: {
    twitterLink(url, { title }) {
      window.open(
        "https://www.twitter.com/share" +
          objectToGetParams({
            url: url,
            text: title
          }),
        "__blank"
      );
    }
  },
  props: {
    url: {
      required: true,
      type: String
    },
    title: {
      required: false,
      type: String
    },
    text: {
      required: false,
      type: String
    }
  }
};
</script>
