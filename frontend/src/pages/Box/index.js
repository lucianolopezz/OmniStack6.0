import React, { Component } from 'react';

import api from '../../services/api';
import Dropzone from 'react-dropzone';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import socket from 'socket.io-client';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {
  state = {
    box: {},
  };

  async componentDidMount() {
    this.subscribeToNewFiles();

    const box = this.props.match.params.id;
    const response = await api.get(`boxes/${box}`);

    this.setState({ box: response.data });
  }

  handleUpload = (files) => {
    const box = this.props.match.params.id;

    files.forEach(file => {
      const data = new FormData();

      data.append('file', file);

      api.post(`boxes/${box}/files`, data);
    }); 
  }

  subscribeToNewFiles = () => {
    const box = this.props.match.params.id;
    const io = socket('http://localhost:3333');

    io.emit('connectRoom', box);

    io.on('file', data => {
      this.setState({ 
        box: { ...this.state.box, files: [data, ...this.state.box.files ], }
      });
    });
  }

  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="" />
          <h1>{this.state.box.title}</h1>
        </header>

        <Dropzone onDropAccepted={this.handleUpload}>
          {({ getRootProps, getInputProps }) => (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arraste arquivos ou clique aqui</p>
            </div>
          )}
        </Dropzone>

        <ul>
          { this.state.box.files && this.state.box.files.map(file => (
            <li key={file._id}>
              <a className="fileInfo" href={file.url} target="_blank">
                <MdInsertDriveFile size={24} color="#A5CFFF" />
                <strong>{file.title}</strong>
              </a>

              <span>
                há {distanceInWords(file.createdAt, new Date(), {
                  locale: pt,
                })}
              </span>
            </li>
          )) }
        </ul>

      </div>
    );
  }
}
