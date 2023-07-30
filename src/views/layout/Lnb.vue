<template>
    <v-navigation-drawer fixed app floating :expand-on-hover="mini" :value="drawer" :right="$vuetify.rtl" class=""
        :class="!$vuetify.breakpoint.mobile ? '' : 'bg-white'" :data-color="sidebarColor" :data-theme="sidebarTheme">
    </v-navigation-drawer>
</template>
<script>
export default {
    name: "drawer",
    props: {
        drawer: {
            type: Boolean,
            default: null,
        },
        sidebarColor: {
            type: String,
            default: "success",
        },
        sidebarTheme: {
            type: String,
            default: "dark",
        },
    },
    data: () => ({
        mini: false,
        togglerActive: false,
        thirdLevelSimple: [
            "Third level menu",
            "Just another link",
            "One last link",
        ],
    }),
    mounted() {
    },
    methods: {
        listClose(event) {
            let items;
            let headers;
            let groups;
            let currentEl;

            if (
                document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link.item-active"
                )
            ) {
                items = document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link.item-active"
                );
            }

            if (
                document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
                )
            ) {
                headers = document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
                );
            }

            if (
                document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
                )
            ) {
                groups = document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
                );
            }

            if (
                event.target.closest(
                    ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
                )
            ) {
                currentEl = event.target.closest(
                    ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
                );
            }

            if (items != null) {
                for (var i = 0; i < items.length; i++) {
                    items[i].classList.remove("item-active");
                }
            }

            if (headers != null) {
                for (var j = 0; j < headers.length; j++) {
                    headers[j].classList.remove(
                        "v-list-item--active",
                        "item-active",
                        "primary--text"
                    );
                    headers[j].setAttribute("aria-expanded", false);
                }
            }

            if (groups != null) {
                for (var k = 0; k < groups.length; k++) {
                    groups[k].classList.remove("v-list-group--active", "primary--text");
                }
            }

            if (event.target.closest(".mb-0.v-list-item.v-list-item--link")) {
                event.target
                    .closest(".mb-0.v-list-item.v-list-item--link")
                    .classList.add("item-active");
            }

            if (currentEl != null) {
                currentEl
                    .querySelector(".v-list-group__header")
                    .classList.add("v-list-item--active", "item-active");
            }
        },
    },
};
</script>
