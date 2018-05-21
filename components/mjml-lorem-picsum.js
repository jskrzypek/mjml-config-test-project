'use strict';


const {
  BodyComponent
} = require('mjml-core');
const { registerDependencies } = require('mjml-validator');
const widthParser = require('mjml-core/lib/helpers/widthParser');

registerDependencies({
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['mj-lorem-picsum'],
  'mj-column': ['mj-lorem-picsum'],
  'mj-body': ['mj-lorem-picsum'],
  // Tell the validator which tags are allowed as our component's children
  'mj-lorem-picsum': []
});
class MjLoremPicsum extends BodyComponent {
  render() {
    const { parsedWidth: width } = widthParser(this.getAttribute('width'));
    const heightAttr = this.getAttribute('height');
    const height = heightAttr === 'auto' ? width : widthParser(heightAttr).parsedWidth;
    return this.renderMJML(`<mj-image src="https://picsum.photos/${width}/${height}" width="${width}" height="${height}" />`);
  }
}

MjLoremPicsum.allowedAttributes = {
  width: 'unit(px)',
  height: 'unit(px)',
};

MjLoremPicsum.defaultAttributes = {
  width: '200',
  height: 'auto'
};
module.exports = MjLoremPicsum;