const cloudName = process.env.UPLOAD_BUCKET;
const unsignedUploadPreset = process.env.UPLOAD_PRESET;

// eslint-disable-next-line no-unused-vars
export const uploadFile = (file, observer) =>
  new Promise((resolve) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.upload.onprogress = (event) => {
      const progress = Math.round((event.loaded * 100.0) / event.total);

      observer.next(progress);
    };

    xhr.upload.onerror = (error) => {
      observer.error(error);
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        observer.complete();
        resolve(response);
      }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);

    xhr.send(fd);
  });

const handleUpload = (files, observer) =>
  new Promise((resolve) => {
    let i = files.length;
    const promises = [];

    // eslint-disable-next-line no-plusplus
    while (i--) {
      promises.push(uploadFile(files[i], observer));
    }

    return Promise.all(promises).then((urls) => {
      observer.complete();
      resolve(urls);
    });
  });

export default handleUpload;
