<template>
    <bk-sideslider
        :width="$attrs['width']"
        :ext-cls="$attrs['ext-cls']"
        :is-show.sync="sliderShow"
        :quick-close="true"
        :transfer="true"
    >
        <div slot="header">
            <slot v-if="!!$slots['header']" name="header"></slot>
            <span v-else
                :title="$attrs['title']">
                {{ $attrs['title'] }}
            </span>
        </div>
        <slot v-if="sliderShow" slot="content" name="content"></slot>
        <slot v-if="sliderShow" slot="footer" name="footer"></slot>
    </bk-sideslider>
</template>

<script>
    export default {
        name: 'slider-layout',
        data () {
            return {
                sliderShow: true
            }
        },
        methods: {
            hidden () {
                this.sliderShow = true
            },
            show () {
                this.sliderShow = false
            }
        }
    }
</script>

<style scoped>

</style>
