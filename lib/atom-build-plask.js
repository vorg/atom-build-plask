var spawnSync = require('child_process').spawnSync;

exports.provideBuilder = function () {
  return {
    niceName: 'Plask',

    isEligable: function () {
      var textEditor = atom.workspace.getActiveTextEditor();
      if (!textEditor || !textEditor.getPath()) {
        return false;
      }
      var path = textEditor.getPath();
      return path.endsWith('.js');
    },

    settings: function (cwd) {
      var plaskBin = '/Users/vorg/Dev/plask/DerivedData/plask/Build/Products/Release/Plask.app/Contents/MacOS/Plask';
      var file = '/Users/vorg/Workspace/vorg-pex-modules/node_modules/pex-examples/context.transform/main.js';

      return [ {
          name: 'Plask: run',
          sh: false,
          exec: plaskBin,
          args: [ '{FILE_ACTIVE}' ]
      }];
    }
  };
};
