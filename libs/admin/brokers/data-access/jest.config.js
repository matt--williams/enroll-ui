module.exports = {
  name: 'admin-brokers-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/admin/brokers/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
