const cloudName = process.env.UPLOAD_BUCKET;
const unsignedUploadPreset = process.env.UPLOAD_PRESET;

// eslint-disable-next-line no-unused-vars
const uploadFile = (file) => new Promise((resolve, reject) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  const xhr = new XMLHttpRequest();
  const fd = new FormData();

  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  // Reset the upload progress bar
  // document.getElementById('progress').style.width = 0;

  // Update progress (can be used to show progress indicator)
  xhr.upload.addEventListener('progress', (e) => {
    const progress = Math.round((e.loaded * 100.0) / e.total);
    // document.getElementById('progress').style.width = `${progress}%`;
    console.log(`Progress: ${progress}% - ${e.loaded}/${e.total}`);
  });

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      resolve(response.secure_url);
    }
  };

  fd.append('upload_preset', unsignedUploadPreset);
  fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
  fd.append('file', file);

  xhr.send(fd);
});

const handleUpload = (files) => new Promise((resolve) => {
  let i = files.length;
  const promises = [];

  while (i--) { // eslint-disable-line no-plusplus
    // eslint-disable-next-line security/detect-object-injection
    promises.push(uploadFile(files[i]));
  }

  return Promise.all(promises).then((urls) => {
    resolve(urls);
  });
});

export default handleUpload;
