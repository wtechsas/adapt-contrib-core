import components from 'core/js/components';
import logging from 'core/js/logging';
import AdaptModel from 'core/js/models/adaptModel';

class BlockModel extends AdaptModel {

  get _parent() {
    logging.deprecated('blockModel._parent, use blockModel.getParent() instead, parent models are defined by the JSON');
    return 'articles';
  }

  get _siblings() {
    logging.deprecated('blockModel._siblings, use blockModel.getSiblings() instead, sibling models are defined by the JSON');
    return 'blocks';
  }

  get _children() {
    logging.deprecated('blockModel._children, use blockModel.hasManagedChildren instead, child models are defined by the JSON');
    return 'components';
  }

  /**
   * Returns a string of the model type group.
   * @returns {string}
   */
  getTypeGroup() {
    return 'block';
  }

}

components.register('block', { model: BlockModel });

export default BlockModel;
