import axios from 'axios';
import { BaseAPI } from './baseAPI';

const token = sessionStorage.getItem('token');

export default class WorkSpaceAPI extends BaseAPI {
  constructor() {
    super({ endpoint: 'api/workSpaces' });
  }

  createNew = async (data) => {
    const res = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      url: `${this.api}/${this.endpoint}/createWorkSpace`,
      data: {
        workSpace: data,
      },
    });

    return res;
  };

  getAll = async () => {
    const res = await axios({
      method: 'GET',
      url: `${this.api}/${this.endpoint}/getAllWorkSpacesOfAllUsers`,
      data: null,
    });

    return res;
  };

  getByName = async (name) => {
    const res = await axios({
      method: 'GET',
      url: `${this.api}/${this.endpoint}/getByName?name=${name}`,
      data: null,
    });

    return res;
  };

  updateByID = async (id, data) => {
    const res = await axios({
      method: 'PUT',
      url: `${this.api}/${this.endpoint}/updateWorkSpaceByID?id=${id}`,
      data: {
        workSpace: data,
      },
    });

    return res;
  };
}
