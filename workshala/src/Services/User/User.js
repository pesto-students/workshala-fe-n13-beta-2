import axios from "axios";
import { BASE_API_URL, HEADER } from "../constants";
import { isEmpty } from "../../Utils/Generic";

export function uploadFile(data) {
  if (data !== undefined) {
    const fileName = data.name;
    const fileData = data.file;
    const dataType = data.dataType;

    var url = BASE_API_URL + "/parse/files/" + fileName;

    const custHeader = {
      ...HEADER,
      "Content-Type": dataType,
    };

    return axios
      .post(url, fileData, { headers: custHeader })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export function getObjectId(data) {
  if (data !== undefined) {
    const userId = data.userId;
    const role = data.role;

    var url = BASE_API_URL + "/functions/getUserObjectId";

    const params = {
      userId: userId,
      role: role,
    };

    return axios
      .post(url, params, { headers: HEADER })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export function updateUserInfoApi(data) {
  if (
    data !== undefined &&
    data.data !== undefined &&
    data.data.result &&
    data.originalData !== undefined
  ) {
    const baseData = data.data.result[0];
    const objectId = baseData.objectId;
    const origData = data.originalData;
    const role = data.role;

    const payload = {
      ...origData,
      ...(!isEmpty(data.imgData) && {
        profileImg: {
          name: data.imgData.data.name,
          url: data.imgData.data.url,
          __type: "File",
        },
      }),
      ...(role === "candidate" &&
        !isEmpty(data.resumeData) && {
          resume: {
            name: data.resumeData.data.name,
            url: data.resumeData.data.url,
            __type: "File",
          },
        }),
    };

    const url =
      role === "candidate"
        ? BASE_API_URL + "/classes/UserInfo/" + objectId
        : BASE_API_URL + "/classes/CompanyInfo/" + objectId;

    const custHeader = {
      ...HEADER,
      "Content-Type": "application/json",
    };

    return axios
      .put(url, payload, { headers: custHeader })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export function getUserInfo(data) {
  if (data !== undefined && data.data !== undefined) {
    const userId = data.data.objectId;
    const role = data.data.role;

    var url = BASE_API_URL + "/functions/getProfile";
    const params = { userId: userId, role: role };

    return axios
      .post(url, params, { headers: HEADER })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export function searchCandidatesApi(data) {
  var url = BASE_API_URL + "/classes/UserInfo";

  if (!isEmpty(data)) url += "?where=" + JSON.stringify(data);

  return new Promise((resolve) => {
    axios
      .get(url, { headers: HEADER })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw error;
      });
  });
}
