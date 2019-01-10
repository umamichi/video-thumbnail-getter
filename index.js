var ffprobePath = require('@ffprobe-installer/ffprobe').path;
var ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfprobePath(ffprobePath);

// ffmpeg本体をmacにインストールする必要がある
ffmpeg('./sample.mp4')
  .screenshots({
    timestamps: [30.5, '50%', '01:10.123'],
    filename: 'thumbnail-at-%s-seconds.png',
    folder: './tmp',
    size: '320x240'
  });
