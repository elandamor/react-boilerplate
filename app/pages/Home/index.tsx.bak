/**
 * Home
 */

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Observable } from 'rxjs';
// Styles
import Wrapper from './styles';

import { debug } from '../../lib';
import { uploadFile } from '../../lib/uploader.js';

class Home extends PureComponent<{}, {}> {
  protected uploadField: any;
  protected wrapper: any;

  public render() {
    return (
      <Wrapper
        innerRef={(c) => {
          this.wrapper = c;
        }}
      >
        <Helmet>
          <title>Home</title>
        </Helmet>
        <input
          type="file"
          ref={(c) => {
            this.uploadField = c;
          }}
          multiple
        />
        <button onClick={this.doUpload}>Upload</button>
      </Wrapper>
    );
  }

  private doUpload = async () => {
    const container = this.wrapper;
    const files = Array.from(this.uploadField.files);

    if (files.length > 0) {
      const promises = [];

      files.map((file) => {
        // Create a progress bar for file
        const progress = document.createElement('progress');
        progress.className = 'c-progress';
        progress.setAttribute('min', '0');
        progress.setAttribute('max', '100');

        container.appendChild(progress);

        // Setup observers for each file
        Observable.create(async (observer) => {
          promises.push(uploadFile(file, observer));
        }).subscribe({
          complete: () => {
            if (container) {
              container.removeChild(progress);
            }
          },
          error: (value) => {
            debug(value);
          },
          next: (value) => {
            progress.value = value;
          },
        });
      });

      return Promise.all(promises).then((urls) => {
        debug({ urls });
      });
    }
  }
}

export default Home;
