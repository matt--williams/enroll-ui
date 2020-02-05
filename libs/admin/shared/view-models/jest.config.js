module.exports = {
  name: 'admin-shared-view-models',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/admin/shared/view-models',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
