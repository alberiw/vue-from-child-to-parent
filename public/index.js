httpVueLoader.register(Vue, 'pages/registration.vue');
httpVueLoader.register(Vue, 'components/registration-body.vue');
httpVueLoader.register(Vue, 'components/confirm.vue');

new Vue({
    el: '#app',
    components: {
        'registration': httpVueLoader('pages/registration.vue'),
        'registration-body': httpVueLoader('components/registration-body.vue'),
        'confirm': httpVueLoader('components/confirm.vue')
    }
});