import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner';
  info: {
    displayName: '\u0411\u0430\u043D\u043D\u0435\u0440';
  };
  attributes: {
    Body: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.Component<'shared.ssylka', false> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSlajder extends Struct.ComponentSchema {
  collectionName: 'components_shared_slajder';
  info: {
    displayName: '\u0421\u043B\u0430\u0439\u0434\u0435\u0440';
  };
  attributes: {
    Banner: Schema.Attribute.Component<'shared.banner', true>;
    Body: Schema.Attribute.Text;
    Button: Schema.Attribute.Component<'shared.ssylka', false>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSsylka extends Struct.ComponentSchema {
  collectionName: 'components_shared_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    IsExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTekstovyjBlok extends Struct.ComponentSchema {
  collectionName: 'components_shared_tekstovyj_blok';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0411\u043B\u043E\u043A';
  };
  attributes: {
    Text: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner': SharedBanner;
      'shared.slajder': SharedSlajder;
      'shared.ssylka': SharedSsylka;
      'shared.tekstovyj-blok': SharedTekstovyjBlok;
    }
  }
}
