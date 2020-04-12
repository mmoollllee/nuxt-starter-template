<template>
  <figure>
    <img
      v-if="fileMIME === 'svg+xml'"
      :src="require('~/assets/' + src + '?data')"
      :alt="alt"
    />
    <picture v-else>
      <!-- WebP Image. Srcset not supported yet :( -->
      <!-- <source
        :srcset="require('~/assets/' + src + '?lqip')"
        :data-srcset="require('~/assets/' + src + '?webp')"
        type="image/webp"
      /> -->
      <!-- If Custom sizes are defined -->
      <source
        v-if="sizes == 'thumbnail'"
        :srcset="require('~/assets/' + src + '?lqip')"
        :data-srcset="
          require('~/assets/' + src + '?resize&sizes[]=250&sizes[]=500').srcSet
        "
        :type="'image/' + fileMIME"
      />
      <source
        v-else-if="sizes == 'medium'"
        :srcset="require('~/assets/' + src + '?lqip')"
        :data-srcset="
          require('~/assets/' +
            src +
            '?resize&sizes[]=250&sizes[]=500&sizes[]=640&sizes[]=800').srcSet
        "
        :type="'image/' + fileMIME"
      />
      <source
        v-else
        :srcset="require('~/assets/' + src + '?lqip')"
        :data-srcset="
          require('~/assets/' +
            src +
            '?resize&sizes[]=250&sizes[]=500&sizes[]=640&sizes[]=800&sizes[]=1280&sizes[]=2000')
            .srcSet
        "
        :type="'image/' + fileMIME"
      />
      <img
        :src="require('~/assets/' + src + '?lqip')"
        :data-src="require('~/assets/' + src + '?size=2000')"
        :alt="alt"
        class="lazyload"
      />
    </picture>
    <figcaption v-if="caption === true">
      {{ alt }}
    </figcaption>
    <figcaption v-else-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scopped>
picture {
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s, transform 0.3s;
}
img[lazy='loading'] {
  filter: blur(15px);
  transform: scale(1.1);
}

.thumbnail {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.thumbnail > * {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>

<script lang="ts">
import Vue from 'vue'

const getFileMIME = (src: String) => {
  const extention = src.slice(((src.lastIndexOf('.') - 1) >>> 0) + 2)
  if (extention === 'jpg') {
    return 'jpeg'
  } else if (extention === 'svg') {
    return 'svg+xml'
  } else {
    return extention
  }
}

export default Vue.extend({
  name: 'ImageSet',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    sizes: {
      type: [Boolean, String],
      default: false
    },
    caption: {
      type: [Boolean, String],
      default: false
    }
  },

  computed: {
    fileMIME(): String {
      return getFileMIME(this.src)
    }
  }
})
</script>
