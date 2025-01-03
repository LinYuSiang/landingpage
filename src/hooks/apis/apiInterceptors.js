import axios from 'axios';


const apiClient = axios.create({
});

// 添加請求攔截器
apiClient.interceptors.request.use(
  (config) => {
    config.headers['_language'] = sessionStorage.getItem('language') || setLanguage(); // 默認使用
    // 在發送請求之前自動添加 headers
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data'; // 如果是 FormData，使用 multipart/form-data
    } else {
      config.headers['Content-Type'] = 'application/json'; // 默認使用 application/json
    }
    // 返回配置過的請求
    return config;
  },
  (error) => {
    // 請求錯誤處理
    return Promise.reject(error);
  }
);

function setLanguage() {
  const lang =  (navigator.language || navigator.browserLanguage).toLowerCase()
  switch (lang) {
    case 'zh-cn':
      return "zh_CN"
    case 'en-us':
      return "en_US"
    case 'tl-ph':
      return "tl_PH"
    case 'fil':
      return "tl_PH"
    default:
      return "en_US"
  }
}

// 通用的請求函數
const apiRequest = async (method, url, data = null) => {
  try {
    const config = {
      method,
      url,
      data: method === 'post' ? data : null, // POST 時帶上 data，GET 不需要
    };

    const response = await apiClient(config); // 執行請求
    return response.data; // 返回響應數據
  } catch (error) {
    console.error(`Error with ${method.toUpperCase()} request to ${url}:`, error);
    throw error; // 如果請求失敗，拋出錯誤
  }
};

export default apiRequest