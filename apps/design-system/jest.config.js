module.exports = {
  name: 'design-system',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/design-system',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
