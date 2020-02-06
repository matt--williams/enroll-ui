module.exports = {
  name: 'utils-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/utils/testing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
