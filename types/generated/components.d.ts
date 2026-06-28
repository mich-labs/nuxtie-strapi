import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner';
  info: {
    displayName: '\u0411\u0430\u043D\u043D\u0435\u0440';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.ssylka', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSsylka extends Struct.ComponentSchema {
  collectionName: 'components_shared_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTekstovyjBlok extends Struct.ComponentSchema {
  collectionName: 'components_shared_tekstovyj_blok';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0411\u043B\u043E\u043A';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface WidgetsBannerSekcziya extends Struct.ComponentSchema {
  collectionName: 'components_widgets_banner_sekcziya';
  info: {
    displayName: '\u0411\u0430\u043D\u043D\u0435\u0440 \u0441\u0435\u043A\u0446\u0438\u044F';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 350;
      }>;
    link: Schema.Attribute.Component<'shared.ssylka', false> &
      Schema.Attribute.Required;
    mainImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    smallImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsSlajder extends Struct.ComponentSchema {
  collectionName: 'components_widgets_slajder';
  info: {
    displayName: '\u0421\u043B\u0430\u0439\u0434\u0435\u0440';
  };
  attributes: {
    banner: Schema.Attribute.Component<'shared.banner', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
          min: 1;
        },
        number
      >;
    button: Schema.Attribute.Component<'shared.ssylka', false> &
      Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner': SharedBanner;
      'shared.seo': SharedSeo;
      'shared.ssylka': SharedSsylka;
      'shared.tekstovyj-blok': SharedTekstovyjBlok;
      'widgets.banner-sekcziya': WidgetsBannerSekcziya;
      'widgets.slajder': WidgetsSlajder;
    }
  }
}
