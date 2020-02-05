module.exports = {
  name: 'admin-brokers-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/admin/brokers/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
