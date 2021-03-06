import Ember from "ember";
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('class-field-description', 'Integration | Component | class field description', {
  integration: true
});

test('it renders', function(assert) {
  this.set('type', 'method');
  this.set('field', Ember.Object.create({
    access: "public",
    deprecated: true,
    name: "concat",
    description: "concatenates"
  }));

  this.render(hbs`{{class-field-description type=type field=field}}`);

  assert.equal(this.$().find('.method-name').text().trim(), 'concat');
  assert.equal(this.$().find('.access').eq(0).text().trim(), 'public');
  assert.equal(this.$().find('.access').eq(1).text().trim(), 'deprecated');
});
