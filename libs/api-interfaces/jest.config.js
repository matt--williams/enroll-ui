module.exports = {
  name: 'api-interfaces',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/api-interfaces',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
