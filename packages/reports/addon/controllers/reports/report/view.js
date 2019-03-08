/**
 * Copyright 2017, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Controller, { inject as controller } from '@ember/controller';

export default Controller.extend({
  /*
   * @property {Controller} reportController
   */
  reportController: controller('reports.report')
});
