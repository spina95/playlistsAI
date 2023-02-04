<template>
    <div> 
        <div :class="className">
            <ins
            class="adsbygoogle"
            :style="{display: 'block'}"
            :data-ad-client="googleAdId"
            :data-ad-slot="slotter"
            data-ad-format="auto"
            data-full-width-responsive="true"
            ></ins>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        timeout: Number,
        className: String,
        slotter: String
    },
    data() {
        return {
            googleInit: null,
            googleAdId: "ca-pub-7124105548936131",
            timeoutData: Number,
        }
    },

    mounted() {
        this.timeoutData = 200;
        this.googleInit = setTimeout(() => {
        if (typeof window !== "undefined")
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, this.timeoutData);
    },
  unmounted() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }
    
}
</script>

<style>
    .ad-border {
        padding:10px; 
        border: 1px solid #eee;
    }

    .ad-noborder {
        padding:10px;
    }
</style>