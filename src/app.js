export const request = {
  errorHandler: error => {
    console.log('error:', error);
  },
  errorConfig: {
    adaptor: resp => {
      return {
        success: resp.code === 0,
        data: resp.data,
        errorCode: resp.code,
        errorMessage: resp.message,
      };
    },
  },
};
