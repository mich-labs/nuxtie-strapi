import type { Core } from '@strapi/strapi';


const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    'config-sync': {
        enabled: true,
        config: {
            minify: true,
        }
    },
    'strapi-typed-client': {
        enabled: true,
        config: {
            requireAuth: process.env.NODE_ENV === 'production' ? true : false
        },
    },
})

export default config;
